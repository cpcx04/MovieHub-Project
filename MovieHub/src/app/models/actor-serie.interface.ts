export interface ActorSerieResponse {
    cast: Series[];
    crew: any[];
    id:   number;
}

export interface Series {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    origin_country:    OriginCountry[];
    original_language: OriginalLanguage;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    Date;
    name:              string;
    vote_average:      number;
    vote_count:        number;
    character:         string;
    credit_id:         string;
    episode_count:     number;
}

export enum OriginCountry {
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
}
