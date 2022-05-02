export class ViewMananger {
    constructor() {
        this.editorIniciado = !(typeof parent.gjsEditor == "undefined");
        this.editor = this.editorIniciado ? parent.gjsEditor : "";
        this.lista = this.editorIniciado ? this.editor.getComponents() : "";
        this.components = this.editorIniciado ? this.lista.domc.componentsById : "";
    }

    exists(tag) {
        if (this.editorIniciado) {
            tag = "#" + tag;
            elemnet = document.querySelector(tag);
            return !(elemnet === null);
        } else {
            elemnet = components[tag];
            return !(typeof elemnet === "undefined");
        }
    }

    get(tag) {
        if (this.editorIniciado) {
            tag = "#" + tag;
            elemnet = document.querySelector(tag);
            return elemnet;
        } else {
            elemnet = components[tag];
            return elemnet;
        }
    }

    show(tag, status) {
        let element = get_element(tag);
        let exibe = status ? "block" : "none"
        if (this.editorIniciado) {
            element.style.display = exibe;
        } else {
            var valor = 'display:' + exibe;
            element.setAttributes({ 'style': valor });
        }
    }

    add(tag, element) {
        let root = get_element(tag);
        root.append(element);
    }

}