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
            return null;
          }
          const propertyList = httpResponse.json();
          return propertyList;
        },
          error => {
            return null;
          });
      }    

}

export default PropertyListAPI;