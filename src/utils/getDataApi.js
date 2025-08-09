import axios from "axios";

class GetDataApi {
    async getData (url) {
        try {
            const response = axios.get(url);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default new GetDataApi();