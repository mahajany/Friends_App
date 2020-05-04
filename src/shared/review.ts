export interface Review {

    _id: string;
    episode: string;
    author: string;
    email: string;
    agree: boolean;
    comment: string;
    rating: number;
    date: string;

}
export const contactType = ["None" , "Tel", "Email"];