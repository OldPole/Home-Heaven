import getDataApi from './utils/getDataApi.js';
import { CATALOG_URL } from './constants/url.js';

import './sass/main.scss';

async () => {
    const data = await getDataApi('/data/catalog.json');
    console.log(data);
}