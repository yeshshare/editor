var body = document.getElementsByTagName("body")[0];

var menu_registred = "";
var menu_unregistred = "";
var components = null;
var logado = ""
var accessType = ""

body.addEventListener("load", init(), false);




function init() {

    load_parameters();
    console.log(logado == 'n');
    try {
        show_element(("menu_registerd"), (logado == 's'));
        show_element(("menu_unregisterd"), (logado == 'n'));
    } catch (error) {
        console.log(error);
    };
    try {
        var login = document.getElementById("login");
        login.style.display = (accessType == 1 || accessType == 2) ? "block" : "none";
        let lista = document.querySelectorAll("section");
        [].forEach.call(lista, (e) => {
            if (e.id != login.id) {
                console.log(e.id)
                e.style.display = (accessType == 0 || accessType == 2) ? "block" : "none";
            }
        });
    } catch (error) {

    };


};

function load_parameters() {
    if (typeof parent.gjsEditor == "undefined") {
        try {
            logado = document.querySelector("#registered").value;
        } catch (error) {
            logado = "s";
        }
        try {
            accessType = parseInt(document.querySelector("#accessType").value);
        } catch (error) {
            accessType = 2;
        }
        accessType = parseInt(document.querySelector("#accessType").value);
    } else {
        try {
            logado = parent.document.querySelector("#registered").value;
        } catch (error) {
            logado = "s";
        }
        try {
            accessType = parseInt(parent.document.querySelector("#accessType").value);
        } catch (error) {
            accessType = 2;
        }
        editor = parent.gjsEditor;
        lista = editor.getComponents();
        components = lista.domc.componentsById;
    }
}



function element_exists(tag) {
    if (typeof parent.gjsEditor == "undefined") {
        tag = "#" + tag;
        elemnet = document.querySelector(tag);
        return !(elemnet === null);
    } else {
        elemnet = components[tag];
        return !(typeof elemnet === "undefined");
    }
}

function get_element(tag) {
    if (typeof parent.gjsEditor == "undefined") {
        tag = "#" + tag;
        elemnet = document.querySelector(tag);
        return elemnet;
    } else {
        elemnet = components[tag];
        return elemnet;
    }
}


function show_element(tag, status) {
    let element = get_element(tag);
    let exibe = status ? "block" : "none"
    if (typeof parent.gjsEditor == "undefined") {
        element.style.display = exibe;
    } else {
        var valor = 'display:' + exibe;
        element.setAttributes({ 'style': valor });
    }
}








//funções para abrir menu        
function openNav(x) {
    //x.classList.toggle("change");
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("btn_H").style.display = "none";
}

//funções para abrir menu
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("btn_H").style.display = "block";
}