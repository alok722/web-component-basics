// Example of extending native element via custom element
class ConfirmLink extends HTMLAnchorElement {
    constructor() {
        super();
        this.addEventListener('click', this.onClick);
    }
    
    onClick(event) {
        if (!confirm('Are you sure?')) {
            event.preventDefault();
        }
    }
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });