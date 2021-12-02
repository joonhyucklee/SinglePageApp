import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("viewing posts");
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