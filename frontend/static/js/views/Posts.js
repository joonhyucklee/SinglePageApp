import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Post heading</h1>
            <p>
                Posts filler text p 
            </p>
            <p>
                <a href="/posts" data-link>View Recent posts</a>.
            </p>  
        `;
    }
}