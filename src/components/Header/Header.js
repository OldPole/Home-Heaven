import { ROOT_INDEX } from '../../constants/root';

import classes from './Header.module.css';

console.log(classes);

import logoImg from './img/logo.svg';
import profileImg from './img/profile.svg';
import cartImg from './img/cart.svg';
import searchImg from './img/search.svg';

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
                        <a class="${classes.nav__link}">Каталог</a>
                        <a class="${classes.nav__link}">Диваны</a>
                        <a class="${classes.nav__link}">Кровати</a>
                        <a class="${classes.nav__link}">Пуфы</a>
                        <a class="${classes.nav__link}">Кресла</a>
                    </nav>
                    <div class="${classes.header__search}">
                        <input 
                            type="text"
                            class="${classes.search__input}"
                            placeholder="Поиск"
                        >
                        <button 
                            class="bg-contain ${classes.search__button}"
                            style="background-image: url(${searchImg})"
                        </button>
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