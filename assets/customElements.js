void async function () {
    //get the imported document in templates:
    let templates = document.createElement( 'template' )
    templates.innerHTML = await ( await fetch( 'assets/templates.html' ) ).text()

    //fetch template2 1 and 2:
    let template1 = templates.content.querySelector( '#terminal-template' )
    let template2 = templates.content.querySelector( '#cmd-line' )


    customElements.define(
        "terminal-text",
        class extends HTMLElement {
            constructor() {
                super();
                const templateContent = template1.content;

                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(templateContent.cloneNode(true));
            }
        }
    );

    customElements.define(
        "cmd-line",
        class extends HTMLElement {
            constructor() {
                super();
                const templateContent = template2.content;

                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(templateContent.cloneNode(true));
            }
        }
    );



} ()

