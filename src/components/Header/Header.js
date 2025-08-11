import { ROOT_INDEX } from '../../constants/root';

import classes from './Header.module.scss';

class Header {
    render () {
        const htmlContent = `
            <div class="">
                <div class="">
                    <a>
                        <img class="" src=""/>
                    </a>
                    <span class="">Home Heaven</span>
                </div>
                <nav class="">
                    <a>Каталог</a>
                    <a>Диваны</a>
                    <a>Кровати</a>
                    <a>Пуфы</a>
                    <a>Кресла</a>
                </nav>
                <div class="">
                    <input 
                        type="text"
                        class=""
                        placeholder="Поиск"
                    >
                </div>
                <div>
                    <a>
                        <img />
                    </a>
                    <a>
                        <img />
                    </a>
                </div>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlContent;
    }
}

export default new Header();