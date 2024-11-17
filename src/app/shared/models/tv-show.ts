import { TvShowDetails } from './tv-show-details';
import { TvShowEpisode } from './tv-show-episode';

export class TvShow {
    constructor(
        public name?: string,
        public description?: string,
        public logoUrl?: string,
        public thumbUrl?: string,
        public coverUrl?: string
    ) {}

    public synopsis!: string;
    public videoId!: string;
    public ranking!: number;
    public isFeatured: boolean = false;
    public verticalThumbUrl?: string;
    public details!: TvShowDetails;
    public episodes: TvShowEpisode[] = [];
}
