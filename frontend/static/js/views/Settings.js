import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings header</h1>
            <p>
                Manage your settings here
            </p>
            <p>
                <a href="/settings" data-link>View Recent posts</a>.
            </p>  
        `;
    }
}