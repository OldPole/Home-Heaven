import { ROOT_INDEX } from '../../constants/root';

import classes from './Header.module.scss';

console.log(classes);

import logoImg from './img/logo.svg';
import profileImg from './img/profile.svg';
import cartImg from './img/cart.svg';

class Header {
    render () {
        const htmlContent = `
            <div class="${classes.header}">
                <div class="header__logo">
                    <a class="logo__link">
                        <img class="logo__img" src="${logoImg}"/>
                    </a>
                    <span class="logo__title">Home Heaven</span>
                </div>
                <nav class="header__nav">
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
                <div class="header__icons">
                    <a class="icon__link">
                        <img class="icon__img" src="${profileImg}"/>
                    </a>
                    <a class="icon__link">
                        <img class="icon__img" src="${cartImg}"/>
                    </a>
                </div>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlContent;
    }
}

export default new Header();