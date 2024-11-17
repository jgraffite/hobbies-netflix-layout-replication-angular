import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SharedModule } from '../../../core/shared.module';
import { TvShow } from '../../models/tv-show';
import { YouTubePlayer } from '@angular/youtube-player';
import { MaturityRatingBoxComponent } from '../commons/maturity-rating-box/maturity-rating-box.component';
import { isInViewport } from '../../core/utils';
import { VideoController } from '../../core/video-controller';

@Component({
    selector: 'app-featured-tv-show',
    standalone: true,
    imports: [SharedModule, YouTubePlayer, MaturityRatingBoxComponent],
    templateUrl: './featured-tv-show.component.html',
    styleUrl: './featured-tv-show.component.scss',
})
export class FeaturedTvShowComponent extends VideoController {
    @ViewChild(YouTubePlayer) override videoPlayer!: YouTubePlayer;

    @Input() featuredTvShow!: TvShow;

    // public tvShow: TvShow = new TvShow(
    //     'Stranger Things',
    //     `When a young boy vanishes, a small town uncovers a mystery
    //     involving secret experiments, terrifying supernatural forces and
    //     one strange little girl.`,
    //     'assets/images/tv-shows/logos/stranger-things.webp',
    //     '',
    //     'https://wallpapercave.com/wp/wp1915209.jpg'
    // );

    @HostListener('window:scroll', [])
    onScroll() {
        if (!this.videoPlayer) {
            return;
        }

        //if (featuredVideo().dataset.autoPlayFinished === "1")
        //    return;

        isInViewport(this.videoPlayer.youtubeContainer.nativeElement)
            ? this.videoPlayer.playVideo()
            : this.videoPlayer.pauseVideo();
    }
}
