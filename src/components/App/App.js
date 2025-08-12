import Header from '../Header/Header';

import './App.scss'

class App {
    async render () {
        Header.render();
    }
}

export default new App();