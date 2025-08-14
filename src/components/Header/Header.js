import { ROOT_INDEX } from '../../constants/root';

import classes from './Header.module.css';

console.log(classes);

import logoImg from './img/logo.svg';
import profileImg from './img/profile.svg';
import cartImg from './img/cart.svg';

class Header {
    render () {
        const htmlContent = `
            <div class="${classes.header}">
                <div class="${classes.header__container}">
                        <a class="${classes.header__logo}">
                            <img class="${classes.logo__img}" src="${logoImg}"/>
                            <span class="${classes.logo__title}">Home Heaven</span>
                        </a>
                    <nav class="${classes.header__nav}">
                        <a class="nav__link">Каталог</a>
                        <a class="nav__link">Диваны</a>
                        <a class="nav__link">Кровати</a>
                        <a class="nav__link">Пуфы</a>
                        <a class="nav__link">Кресла</a>
                    </nav>
                    <div class="header__search">
                        <input 
                            type="text"
                            class="search__input"
                            placeholder="Поиск"
                        >
                    </div>
                    <div class="${classes.header__icons}">
                        <a class="icon__link">
                            <img class="img-cover ${classes.icon__img}" src="${profileImg}"/>
                        </a>
                        <a class="icon__link">
                            <img class="${classes.icon__img}" src="${cartImg}"/>
                        </a>
                    </div>
                </div>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlContent;
    }
}

export default new Header();