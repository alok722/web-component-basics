class Tooltip extends HTMLElement {
  constructor() {
    super(); // runs the constructor of the extended class i.e. HTMLElement in this class
    this._tooltipContainer;
  }

  // Custom element's lifecycle:
  /*
    Element Created -> constructor (Basic Initialization) -> Element attached to DOM -> connectedCallback (DOM Initializations) -> Element detached from DOM -> disconnectedCallback (CleanUp Work) -> (Observed Attribute update)adoptedCallback (Update Data + DOM) -> attributeChangedCallback ->
  */
  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  // Underscore convention for Private Methods.
  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is the tooltip text!';
    this.appendChild(this._tooltipContainer);
  }
  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

customElements.define('uc-tooltip', Tooltip);
