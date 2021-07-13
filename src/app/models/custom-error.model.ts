export class CustomError {
    constructor(code:string , message:string){
        this.code = code;
        this.message = message;
    }
    public code: string;
    public message : string;
}
