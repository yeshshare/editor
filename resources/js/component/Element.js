class Element {
    constructor(tag, atributes) {
        this = document.createElement(tag);
        if (Array.isArray(atributes)) {
            let me = this;
            atributos.forEach(function(atributo) {
                me.addAtributes(atributo.name, atributo.value);
            });
        }
    }

    addAtributes(name, value) {
        this.setAttribute(atributo.name, atributo.value);
    }
}