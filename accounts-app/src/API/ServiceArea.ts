import APIUrls from "./Urls"
import { IAddress } from "../PropertyList/State/Reducer"

class ServiceAreaAPI {

    static mapOwnPropertiesToString(obj: any) {
        let res = "";
        for (var name in obj) {
            if (obj.hasOwnProperty(name)) {
                res = res === "" ? obj[name] : res + "+" + obj[name];
            }
        }
        return res;
    }

    static isWithinRadius(checkPoint: any){
            const ky = 40000 / 360;
            const centerPoint = {lat: 51.5073835, lng: -0.1277801};
            const km = 20;// assumption made that units are metters in task description 20000 m = 20 km
            const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
            const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
            const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
            return Math.sqrt(dx * dx + dy * dy) <= km;          
    }

    static isAddressServicable(address: IAddress) {
        return ServiceAreaAPI.mapAddressToLatLng(address).then(googleApiObj => {
            if (googleApiObj) {
                return ServiceAreaAPI.isWithinRadius(googleApiObj.results[0].geometry.location);
            }
            return false;
        });
    }

    static mapAddressToLatLng(address: IAddress) {
        const url = APIUrls.GoogleGeoCodingApiUrl;

        return fetch(url + ServiceAreaAPI.mapOwnPropertiesToString(address), {
            method: "GET",
            headers: {
                //for auth or similar
            }
        }).then(httpResponse => {
            if (httpResponse.status !== 200) {
                return null;
            }
            const geoCodeApiRes = httpResponse.json();
            return geoCodeApiRes;
        },
            error => {
                return null;
            });
    }

}

export default ServiceAreaAPI;