const appSidebarButtonTemplate = document.createElement("template");

appSidebarButtonTemplate.innerHTML = `

    <style>

    *{
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

    .app-sidebar-button{
        border-radius: 0px 50px 50px 0px;
        display: flex;
        align-items: center;
        width: 240px;
        height: 32px;
        padding: 0 12px 0 26px;
    }

    .app-sidebar-button:hover{
        cursor: pointer;
        background-color: #444746;
    }

    .app-sidebar-button__items{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .app-sidebar-button__title {
        padding: 0 26px;
    }

    </style>

    <div class="app-sidebar-button">
        <slot name="¡con"> </slot>
        <div class="app-sidebar-button__items">
        <span class="app-sidebar-button__title"></span>
        <span class="app-sidebar-button__unreadcounter"></span>
        </div>
    </div>
    
`;

class AppSidebarButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.append(appSidebarButtonTemplate.content.cloneNode(true));

    const text = this.getAttribute("text");
    const unreadcount = this.getAttribute("unreadcount");

    this.shadowRoot.querySelector(".app-sidebar-button__title").innerText = text;
    this.shadowRoot.querySelector(".app-sidebar-button__unreadcounter").innerText = unreadcount;

    if (text == "Inbox") {
      this.shadowRoot
        .querySelector(".app-sidebar-button")
        .setAttribute("style", "background-color:#5f6368; font-weight: bold");
    }

    if (unreadcount >= 1)
      this.shadowRoot
        .querySelector(".app-sidebar-button__title")
        .setAttribute("style", "font-weight: bold");
  }
}

window.customElements.define("app-sidebar-button", AppSidebarButton);
