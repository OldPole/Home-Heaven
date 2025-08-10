import getDataApi from './utils/getDataApi';
import { CATALOG_URL } from './constants/api';

import './sass/main';

(async () => {
    const data = await getDataApi.getData(CATALOG_URL);
    console.log(data);
})();