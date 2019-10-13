import APIUrls from "./Urls"

class PropertyListAPI {

    static retrievePropertyList() {
        const url = APIUrls.PropertyListUrl;
    
        return fetch(url, {
          method: "GET",
          headers: {
            //for auth or similar
          }
        }).then(httpResponse => {
          if (httpResponse.status !== 200) {
            return [];
          }
          const serverList = httpResponse.json();
          return serverList;
        },
          error => {
            return null;
          });
      }    

}

export default PropertyListAPI;