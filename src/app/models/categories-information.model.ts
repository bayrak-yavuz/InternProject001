export class CategoriesInformation {
    

    public categoryName?: string
    public lang?: string
    public url?: string
    public isListed?: boolean
    public _syncDate?: number
}

export class CategoriesDocument{
    public categoryDocumentId: string
    public categoryInformation: CategoriesInformation

    constructor(categoryInformation: CategoriesInformation , categoryDocumentId: string){

        this.categoryDocumentId = categoryDocumentId;
        this.categoryInformation = categoryInformation;
    }
}