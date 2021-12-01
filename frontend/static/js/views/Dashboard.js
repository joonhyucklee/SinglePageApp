import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome Back, here is header</h1>
            <p>
                Filler text here for the p 
            </p>
            <p>
                <a href="/dashboard" data-link>View Recent posts</a>.
            </p>  
        `;
    }
}