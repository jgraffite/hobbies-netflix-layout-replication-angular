export class TvShowDetails {
    public realeaseYear!: number;
    public totalSeasons!: number;
    public qualityLabel!: string;
    public likeRating?: number;
    public maturityRating!: { color: string; label: string };
    public categories: string[] = [];
    public cast: string[] = [];
    public genres: string[] = [];
}
