var body = document.getElementsByTagName("body")[0];

var menu_registred = ""
var menu_unregistred = ""

body.addEventListener("load", init(), false);




function init() {

    if (typeof parent.gjsEditor == "undefined") {

        var logado = document.querySelector("#registered").value;
        var accessType = parseInt(document.querySelector("#accessType").value);

        console.log("sem editor");
        console.log(logado);

        try {
            menu_registred = document.getElementById("menu_registerd");
            menu_unregistred = document.getElementById("menu_unregisterd");
            menu_registred.style.display = (logado == 's') ? "block" : "none";
            menu_unregistred.style.display = (logado == 'n') ? "block" : "none";
        } catch (error) {
            console.log(error);
        };

    } else {

        var editor = parent.gjsEditor;
        var lista = editor.getComponents();
        var components = lista.domc.componentsById;
        menu_registred = components['menu_registerd'];
        menu_unregistred = components['menu_unregisterd'];
        if (typeof parent.accessType == "undefined") {
            var accessType = 2;
        } else {
            var accessType = parent.accessType;
        };

        if (typeof parent.logado == "undefined") {
            var logado = 's';
        } else {
            var logado = parent.logado;
        };

        try {
            if (logado == 's') {
                console.log("logado");
                menu_registred.setAttributes({ 'style': 'display: block' });
                menu_unregistred.setAttributes({ 'style': 'display: none' });
            } else {
                console.log("deslogado");
                menu_unregistred.setAttributes({ 'style': 'display: block' });
                menu_registred.setAttributes({ 'style': 'display: none' });
            }
        } catch (error) {
            console.log(error);
        };
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