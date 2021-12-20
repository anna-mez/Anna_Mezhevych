class Urls {
    uploadUrl: string;
    getMetadataUrl: string;
    deleteUrl: string;

    constructor() {
        this.uploadUrl = "https://content.dropboxapi.com/2/files/upload";
        this.getMetadataUrl = "https://api.dropboxapi.com/2/files/get_metadata";
        this.deleteUrl = "https://api.dropboxapi.com/2/files/delete_v2";
    }

    get getUploadUrl():string {
        return this.uploadUrl;
    }

    get getGetMetadataUrl():string {
        return this.getMetadataUrl;
    }

    get getDeleteUrl():string {
        return this.deleteUrl;
    }
}
export {Urls};
