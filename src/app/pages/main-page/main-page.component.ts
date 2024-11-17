import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../core/shared.module';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Profile } from '../../shared/interfaces/profile';
import { FeaturedTvShowComponent } from '../../shared/components/featured-tv-show/featured-tv-show.component';
import { TvShowsCarouselComponent } from '../../shared/components/commons/tv-shows-carousel/tv-shows-carousel.component';
import { TvShow } from '../../shared/models/tv-show';
import { HttpClient } from '@angular/common/http';
import { MiniPreviewComponent } from '../../shared/components/mini-preview/mini-preview.component';
import { TvShowPreviewComponent } from '../../shared/components/tv-show-preview/tv-show-preview.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SharedModule,
    HeaderComponent,
    FeaturedTvShowComponent,
    TvShowsCarouselComponent,
    MiniPreviewComponent,
    TvShowPreviewComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

    @ViewChild(MiniPreviewComponent)
    miniPreviewComponent!: MiniPreviewComponent;

    @ViewChild(TvShowPreviewComponent)
    tvShowPreviewComponent!: TvShowPreviewComponent;

    public title = 'netflix-in-angular';

    public profiles: Profile[] = [];

    public tvShows: TvShow[] = [];
    public featuredTvShow!: TvShow;

    constructor(
        public translate: TranslateService,
        public httpClient: HttpClient,
        private route: ActivatedRoute
    ) {
      const langCode = this.route.snapshot.data['lang'];
      this.translate.use(langCode);

      this.profiles = [
        {
          avatarUrl: 'assets/images/profile-avatar.png',
          profileName: 'Jorge Luis Malaquias',
        },
        {
          avatarUrl: 'assets/images/profile-avatar.png',
          profileName: this.translate.instant('Extra Profile')+ ' 1',
        },
        {
          avatarUrl: 'assets/images/profile-avatar.png',
          profileName: this.translate.instant('Extra Profile')+ ' 2',
        },
      ]
    }

    ngOnInit(): void {
      this.getTvShows();
      this.setTheFeaturedShow();
    }

    getTvShows() {
        const currentLangCode = this.translate.store.currentLang;
        this.httpClient.get(`assets/jsons/tv-shows/${currentLangCode}.json`).subscribe(r => {
            this.tvShows = (r as any[]).map(i => i as TvShow);
        });
    }

    setTheFeaturedShow() {
        const featureable = this.tvShows.filter(tvShow => tvShow.isFeatured);
        const randomIndex = Math.floor(Math.random() * featureable.length);

        this.featuredTvShow = featureable[randomIndex]; 
    }

    filterAndOrderRanking() {
        return this.tvShows
            .filter(tvShow => tvShow.ranking)
            .sort((a, b) => a.ranking - b.ranking);
    }

    onTvShowsMouseClick(tvShow: TvShow) {
        this.miniPreviewComponent.hide();
        this.tvShowPreviewComponent.show(tvShow);
    }

    onTvShowsMouseOver(values: { targetElement: HTMLElement; tvShow: TvShow }) {
        this.miniPreviewComponent.show(values.targetElement, values.tvShow);
    }

    onTvShowsMouseLeave() {
        this.miniPreviewComponent.clearTimeouts();
    }
}
