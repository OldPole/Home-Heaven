import getDataApi from '../../utils/getDataApi';
import { CATALOG_URL } from '../../constants/api';

import './App.scss'

class App {
    async render () {
        const data = await getDataApi.getData(CATALOG_URL);
        console.log(data);
    }
}

export default new App();