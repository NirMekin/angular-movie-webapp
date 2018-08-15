export interface Movie{
    name : string;
    rate : {
        voted : number,
        rate : number
    };
    desc: string;
    stars: string;
    director : string;
    length : string;
    geners: string[];
    release: string;
    poster: string;
    earning:string;
}

export interface MovieMetadat{
    name : string,
    rate :  number;
    geners: string[];
    release: string;
    earning:  string;
}