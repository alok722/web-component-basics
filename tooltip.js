class Tooltip extends HTMLElement {
  constructor() {
    super(); // runs the constructor of the extended class i.e. HTMLElement in this class
  }

  // Custom element's lifecycle:
  /*
    Element Created -> constructor (Basic Initialization) -> Element attached to DOM -> connectedCallback (DOM Initializations) -> Element detached from DOM -> disconnectedCallback (CleanUp Work) -> (Observed Attribute update)adoptedCallback (Update Data + DOM) -> attributeChangedCallback ->
  */
  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    this.appendChild(tooltipIcon);
  }
}

customElements.define('uc-tooltip', Tooltip);
