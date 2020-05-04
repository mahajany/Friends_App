import {Review} from './review';
export interface Episode {
    _id: string;

    episodeId: number;

    url: string;
    name: string;
    season: number;

    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: Image;
    summary: string;
    object: any;
    review : Review[];

}
interface Image {
    medium: string;
    large: string;
}
