export class PostsInformation {
    public _syncDate?: number;
    public postIndex?: number;
    public postName?:string;
    public postLang?: string;
    public postUrl?: string;
    public htmlContent?: string;
}
export class PostsDocument{
    public postDocumentId: string
    public postInformation: PostsInformation

    constructor(postsInformation: PostsInformation , postDocumentId: string){

        this.postDocumentId = postDocumentId;
        this.postInformation = postsInformation;
    }

}