import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './core/shared.module';
import { HttpClient } from '@angular/common/http';
//import * as tvShowsData from "../assets/jsons/tv-shows.json"

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        SharedModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {

    constructor(
        private translate: TranslateService,
        public httpClient: HttpClient,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // this.translate.use('pt_BR');
    }

    ngAfterViewInit(): void {
        // this.translate.use('pt_BR');
        // console.log('this.route.url', this.route.url.subscribe(url => console.log(url)));
        // this.route.queryParams.subscribe(queryParam => console.log(queryParam))
    }
}
