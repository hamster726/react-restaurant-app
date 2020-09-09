export default class RestoService {

    constructor(props) {
        this._apiBase = 'https://us-central1-restaurant-app-yesha.cloudfunctions.net/menu/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could now fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    };

    getMenuItems = async () => {
        return await this.getResource('/menu/');

        // return menu.map(this._transformMenu);
    }

    setOrder = async (order) => {
        const number = await this.getOrderNumber();

        const newOrder = {
            id: number,
            order: order
        }

        const response = await fetch(`${this._apiBase}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok) {
            throw new Error('Error sending order to server');
        }

    }

    getOrderNumber = async () => {
        const res = await this.getResource('/orders');
        const orderNumber = res.length + 1;

        return orderNumber;
    }

    _transformMenu(menu) {
        return {
            category: menu.category,
            id: menu.id,
            price: menu.price,
            title: menu.title,
            url: menu.url,
        }

    }
}
