import {Urls} from "./urls";
import axios, {AxiosResponse, AxiosRequestConfig } from "axios";

class Controllers {
  private uploadConfig : AxiosRequestConfig;
  private getGonfig : AxiosRequestConfig;
  private deleteConfig : AxiosRequestConfig;

  constructor() {
      const urls = new Urls();
      const filePath = "/AM7974.jpg";

      this.uploadConfig = {
          method: 'post',
          url: urls.getUploadUrl,
          headers: {
            'Authorization' : 'Bearer ' + 'j2MGtLJXJEcAAAAAAAAAAdK9bkWl9Ka8iWombE1vkuaMcdXXFrSuiBNWFOpU0p64',
            'Dropbox-API-Arg' : JSON.stringify({"path": filePath,"mode": "add","autorename": true, "mute": false, "strict_conflict": false}),
            'Content-Type': 'application/octet-stream'
            },
  };

  this.getGonfig = {
      method: 'post',
      url : urls.getGetMetadataUrl,
      headers: {
          'Authorization' : 'Bearer ' + 'j2MGtLJXJEcAAAAAAAAAAdK9bkWl9Ka8iWombE1vkuaMcdXXFrSuiBNWFOpU0p64',
          'Content-Type' : 'application/json'
      },
      data: {'path':filePath }
  };
  
  this.deleteConfig = {
      method: 'post',
      url: urls.getDeleteUrl,
      headers: {
          'Authorization' : 'Bearer ' + 'j2MGtLJXJEcAAAAAAAAAAdK9bkWl9Ka8iWombE1vkuaMcdXXFrSuiBNWFOpU0p64',
          'Content-Type' : 'application/json'
      },
      data: {'path':filePath}
  };
}
    upload(): Promise<AxiosResponse> {
      return axios(this.uploadConfig);
    }

    getMetadata(): Promise<AxiosResponse> {
        return axios(this.getGonfig);
    }

    deleteF(): Promise<AxiosResponse> {
        return axios.request(this.deleteConfig);
    }

}

export {Controllers};
