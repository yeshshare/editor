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
    if (element_exists("menu")) {
        try {
            show_element(("menu_registerd"), (logado == 's'));
            show_element(("menu_unregisterd"), (logado == 'n'));
        } catch (error) {
            console.log(error);
        };
    }
    if (element_exists("login")) {
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
    }
    if (element_exists("cardScheduleSpeakers")) {
        var cardScheduleSpeakersMenu = get_element("cardScheduleSpeakersMenu");
        cardScheduleSpeakersMenuLista = [
            ["24/04", "home"],
            ["25/04", "profile"],
            ["26/04", "contact"]
        ];

        [].forEach.call(cardScheduleSpeakersMenuLista, (e, index) => {
            let button = getButton(e[0], e[1], index);
            let linha = getLI(button);
            try {
                console.log(linha);
                cardScheduleSpeakersMenu.append(linha);
            } catch (error) {

            }
        });



        let images = [];
        for (let contador = 0; contador <= 8; contador++) {
            images.push("https://yeshmeet.yeshmeet.com.br/storage//YESH/landingpage/imagens/plataforma-yesh-layout-de-teste-foto-de-palestrante-1pngyesh_1616077381177556524.png");
        }

        var palestrates = get_element("palestrates");
        var imagePalestrantes = getDiVImgPalestrantes(images);
        var buttonEntrar = getButtonEntra();
        palestrates.append(imagePalestrantes);
        palestrates.append(buttonEntrar);
    }

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
            accessType = 1;
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
        let config = window.editorConfig;
        editor = parent.gjsEditor;


        function myPlugin(editor) {
            editor.BlockManager.add('gjs-navbar', {
                label: 'Plug',
                category: 'Basic',
                content: '<div class="my-block"><p>Plugin Success</p></div>',
            });
        }
        editor.Config.plugins.push(myPlugin);


        console.log(editor.Config.plugins);
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




function getButton(label, id, active) {
    let button = document.createElement("button");
    let target = "#" + id;
    let controls = id;
    id = id + "-tab";
    button.setAttribute("class", (active == 0) ? "btn btn-primary button_tab active" : "btn btn-primary button_tab");
    button.setAttribute("id", id);
    button.setAttribute("data-bs-toggle", "tab");
    button.setAttribute("data-bs-target", target);
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab")
    button.setAttribute("aria-controls", controls);
    button.setAttribute("aria-selected", "true");
    button.innerHTML = label;
    return button;
}

function getLI(button) {
    let linha = document.createElement("li");
    linha.setAttribute("class", "nav-item");
    linha.setAttribute("role", "presentation");
    linha.append(button);
    if (typeof parent.gjsEditor == "undefined") {
        return linha;
    } else {
        let ul = document.createElement("ul");
        ul.append(linha);
        return ul.innerHTML;
    }
}

function getDiVImgPalestrantes(images) {
    let row = document.createElement("div");
    row.setAttribute("class", "row speaker_icons");
    [].forEach.call(images, (url) => {
        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("alt", "Card image");
        img.setAttribute("style", "width: 100%;");
        img.setAttribute("src", url);
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 col-sm-4 col-md-2 col-lg-1 col-xl-1 link_social_linha");
        col.append(img);
        row.append(col);
    });
    let quadroImage = document.createElement("div");
    quadroImage.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11");
    quadroImage.append(row);
    if (typeof parent.gjsEditor == "undefined") {
        return quadroImage;
    } else {
        let div = document.createElement("div");
        div.append(quadroImage);
        return div.innerHTML;
    }
}


function getButtonEntra(label, id, active) {
    let button = document.createElement("button");
    let target = "#" + id;
    let controls = id;
    id = id + "-tab";
    button.setAttribute("class", "btn btn-primary btn_full");
    button.setAttribute("href", "#");
    button.innerHTML = "Entrar;";
    let quadroButton = document.createElement("div");
    quadroButton.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 center_Itens_end");
    quadroButton.append(button)
    if (typeof parent.gjsEditor == "undefined") {
        return quadroButton;
    } else {
        let div = document.createElement("div");
        div.append(quadroButton);
        return div.innerHTML;
    }
}