class Tooltip extends HTMLElement {
  constructor() {
    super(); // runs the constructor of the extended class i.e. HTMLElement in this class
    this._tooltipContainer;
    this._tooltipText = 'Default tooltip text!'
    this.attachShadow({ mode: 'open' });
    // Template part of the custom element
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: #000;
          color: #fff;
          position: absolute;
        }
        ::slotted(span) {
          background-color: blue;
        }
      </style>
      <slot>Default Slot Text</slot>
      <span> (?)</span>
    `;
  }
  
  // Custom element's lifecycle:
  /*
  Element Created -> constructor (Basic Initialization) -> Element attached to DOM -> connectedCallback (DOM Initializations) -> Element detached from DOM -> disconnectedCallback (CleanUp Work) -> (Observed Attribute update)adoptedCallback (Update Data + DOM) -> attributeChangedCallback ->
  */
 // 💡 We will be using Shadow DOM to encapsulate our styles.
//  If we are using shadowDOM then real DOM won't be disturbed.
 connectedCallback() {
   if(this.hasAttribute('text')) {
      // Override default tooltip text with the attribute value 
     this._tooltipText = this.getAttribute('text');
   }
   const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    // Appending to shadow DOM so real DOM wont get affected
    // with this, text wrapped inside custom element will get hidden
    // So, now we will be using HTML template to show the text
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  // Underscore convention for Private Methods.
  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }
  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('uc-tooltip', Tooltip);
