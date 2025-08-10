import axios from "axios";

class GetDataApi {
    async getData (url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default new GetDataApi();