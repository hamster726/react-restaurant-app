export default class RestoService {

    constructor(props) {
        this._apiBase = 'http://localhost:5726'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could now fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    };

    getMenuItems = async () => {
        return  await this.getResource('/menu/');

        // return menu.map(this._transformMenu);
    }

    _transformMenu(menu) {
        return {
            category: menu.category,
            id: menu.id,
            price: menu.price,
            title: menu.title,
            url: menu.url
        }

    }
}
