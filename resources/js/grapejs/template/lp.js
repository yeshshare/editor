const { templateSettings } = require("lodash");

console.log("init");

var host = "";
var id = 0;
var body = document.getElementsByTagName("body")[0];
var menu_registred = "";
var menu_unregistred = "";
var components = null;
var logado = ""
var accessType = ""
var productDate = [];
var product = [];
var productID = [];
var productPalestrantes = [];
var childListCount = 0;
var callInit = false;
body.addEventListener("load", getCursos(), false);
const targetNode = document.body;
const config = { childList: true, subtree: true };



function getCursos() {
    load_parameters();
    if (typeof parent.gjsEditor == "undefined") {
        id = parseInt(document.querySelector("#id").value);
    } else {
        id = parseInt(parent.document.querySelector("#id").value);
    }
    let url = '/cursos/get/' + id;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(cursos) {
            setProductDate(cursos);
            setProduct(cursos);
            if (product.length > 0) {
                getPalestrantes();
            } else {
                init();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}


function setProductDate(cursos) {
    let tempDatas = [];
    productDate = [];
    [].forEach.call(cursos, (e, index) => {
        let inicio = e.inicio.split(" ");
        let data = new Date(inicio[0]);
        if (!tempDatas.includes(inicio[0])) {
            tempDatas.push(inicio[0]);
            let strDateParts = inicio[0].split("-");
            productDate.push({ 'value': data, 'text': inicio[0], "parts": { "day": strDateParts[2], "month": strDateParts[1], "year": strDateParts[0] } });
        }
    });
    productDate.sort(function(a, b) {
        return a.value - b.value;
    });
}

function setProduct(cursos) {
    [].forEach.call(cursos, (e, index) => {
        let inicio = e.inicio.split(" ");
        let data = new Date(inicio[0]);
        if (productDate.some(item => item.text === inicio[0])) {
            if (!productID.includes(e.plataforma_curso_id)) {
                productID.push(e.plataforma_curso_id);
            }
            e.productDateIndex = productDate.findIndex(obj => obj.text === inicio[0]);
        } else {
            console.log("faio");
        }
    });
    product = cursos;
}

function getPalestrantes() {
    let url = '/palestrantes/get/' + productID;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(palestrantes) {
            productPalestrantes = palestrantes;
            init();
        })
        .catch(function(error) {
            console.log(error);
        });
}

function init() {
    load_parameters();
    callInit = true;
    if (element_exists("menu")) {
        console.log("logica menu para " + logado);
        try {
            show_element(("menu_registerd"), (logado == 's'));
            show_element(("menu_unregisterd"), (logado == 'n'));
            show_element(("nav_body_registred"), (logado == 's'));
            show_element(("nav_body_unregistred"), (logado == 'n'));
            let buttonNenuID = logado == "s" ? "btn_registerd" : "btn_unregisterd";
            if (typeof parent.gjsEditor == "undefined") {
                var buttonNenu = document.getElementById(buttonNenuID);
                buttonNenu.addEventListener('click', function() {
                    openNav(buttonNenuID)
                });
                var buttonCloseNenu = document.getElementById("btn_close_menu");
                buttonCloseNenu.addEventListener('click', function() {
                    closeNav();
                });
            } else {
                //console.log(openNav);
                let argumento = openNav;
                //buttonNenu = get_element(buttonNenuID);
                //buttonNenu.click = "alert('oi')";

                //buttonNenu.setAttributes({ "onclick": "teste(this)" });
                //buttonNenu = get_element("btn_close_menu");
                //buttonNenu.setAttributes({ "ondblclick": closeNav() });



            }

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
                    e.style.display = (accessType == 0 || accessType == 2) ? "block" : "none";
                }
            });
        } catch (error) {

        };
    }
    if (element_exists("cardScheduleSpeakers")) {
        addTabs()
    }
};

function teste(e) {
    console.log(e);
}

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
        let editor = parent.gjsEditor;
        let lista = editor.getComponents();
        components = lista.domc.componentsById;
    }
}

//funções para manipular elemento na tela

function element_exists(tag) {
    if (typeof parent.gjsEditor == "undefined") {
        tag = "#" + tag;
        let elemnet = document.querySelector(tag);
        return !(elemnet === null);
    } else {
        let elemnet = components[tag];
        return !(typeof elemnet === "undefined");
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

function clear_element(element) {
    if (typeof parent.gjsEditor == "undefined") {
        element.innerHTML = "";
    } else {
        element.components("");
    }
}

function get_element(tag) {
    if (typeof parent.gjsEditor == "undefined") {
        tag = "#" + tag;
        let elemnet = document.querySelector(tag);
        return elemnet;
    } else {
        let elemnet = components[tag];
        return elemnet;
    }
}





function addTabs() {
    callInit = false;
    var cardScheduleSpeakersMenu = get_element("cardScheduleSpeakersMenu");
    var cardScheduleSpeakersContent = get_element("cardScheduleSpeakersContent");
    clear_element(cardScheduleSpeakersMenu);
    clear_element(cardScheduleSpeakersContent);
    [].forEach.call(productDate, (e, index) => {
        let id = "tab-" + e.parts.day + e.parts.month + e.parts.year;
        let label = e.parts.day + "/" + e.parts.month
        let button = getButton(label, id, index);
        let linha = getLI(button);
        let active = (index == 0);
        let tab = getTab(id, active, e);
        try {
            callInit = false;
            cardScheduleSpeakersMenu.append(linha);
            callInit = false;
            cardScheduleSpeakersContent.append(tab);
        } catch (error) {

        };
    });
    callInit = true;
}







function getTab(id, active, pdate) {
    let tab = document.createElement("div");
    let tabContainer = document.createElement("div");
    let tabLinha = document.createElement("div");
    let labelledby = id + "-tab";
    let tabClass = active ? "tab-pane fade show active" : "tab-pane fade";
    tab.setAttribute("id", id);
    tab.setAttribute("class", tabClass);
    tab.setAttribute("role", "tabpanel");
    tab.setAttribute("aria-labelledby", labelledby);
    tabContainer.setAttribute("class", "container");
    tabLinha.setAttribute("class", "row center_Itens");
    tab.append(tabContainer);
    tabContainer.append(tabLinha);
    let productDateIndex = productDate.findIndex(obj => obj.text === pdate.text);
    let products = product.filter(obj => (obj.productDateIndex == productDateIndex));
    products.forEach(function(product) {
        tabLinha.append(getColuna(product));
    });
    tab.append(tabContainer);
    if (typeof parent.gjsEditor == "undefined") {
        return tab;
    } else {
        let tempDiv = document.createElement("div");
        tempDiv.append(tab);
        return tempDiv.innerHTML;
    }

}

function getColuna(product) {
    let tabColuna = document.createElement("div");
    tabColuna.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 space_botton");
    tabColuna.append(getCard(product));
    return tabColuna;
}


function getCard(product) {
    let card = document.createElement("div");
    let cardLinha = document.createElement("div");
    let cardImg = document.createElement("div");
    let cardItens = document.createElement("div");
    let img = getiMG();
    card.setAttribute("class", "card");
    cardLinha.setAttribute("class", "row");
    cardImg.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2");
    cardItens.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10");
    card.append(cardLinha);
    cardLinha.append(cardImg);
    cardLinha.append(cardItens);
    cardImg.append(img);
    cardItens.append(getItensCard(product));
    return card;
}

function getiMG() {
    let img = document.createElement("img");
    let url = "https://yeshmeet.yeshmeet.com.br/storage//YESH/landingpage/imagens/banner-cards-eventos-04-v01-11ago21pngyesh_16330192201034196461.png";
    img.setAttribute("src", url);
    img.setAttribute("class", "card-img-top event_image");
    img.setAttribute("alt", "Card image");
    img.setAttribute("style", "width: 100%;");
    return img;
}

function getItensCard(product) {
    let cardBody = document.createElement("div");
    let cardPalestrantes = document.createElement("div");
    let titulo = document.createElement("h4");
    cardBody.setAttribute("class", "card-body itens_agenda");
    cardPalestrantes.setAttribute("class", "row");
    titulo.setAttribute("class", "card-title");
    titulo.innerText = product.titulo;
    cardBody.append(titulo);
    cardBody.append(getAgenda());
    cardBody.append(cardPalestrantes);
    let palestrantes = productPalestrantes.filter(obj => (obj.plataforma_curso_id == product.plataforma_curso_id));
    cardPalestrantes.append(getDiVImgPalestrantes(palestrantes));
    cardPalestrantes.append(getButtonEntra(product.plataforma_curso_id));
    return cardBody;

}

function getAgenda() {
    let agenda = document.createElement("div");
    agenda.setAttribute("class", "row")
    let texto = "Este é um evento demostrativo do funcinamento da plataforma";
    agenda.append(getHorarioAgenda("15:00"));
    agenda.append(getTextoAgenda(texto));
    //agenda.append(getHorarioAgenda("15:30"));
    //agenda.append(getTextoAgenda(texto));
    //agenda.append(getHorarioAgenda("14:00"));
    //agenda.append(getTextoAgenda(texto));

    return agenda;
}

function getHorarioAgenda(horario) {
    let horarioCol = document.createElement("div");
    horarioCol.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2");
    horarioCol.innerHTML = horario;
    return horarioCol;
}

function getTextoAgenda(texto) {
    let textoCol = document.createElement("div");
    let textoP = document.createElement("p");
    textoCol.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10");
    textoP.setAttribute("class", "card-text");
    textoP.innerHTML = texto;
    textoCol.append(textoP);
    return textoCol;
}


function addPalestrantes(id, images) {
    let ref = "palestrates_" + id;
    var palestrates = get_element(ref);
    var imagePalestrantes = getDiVImgPalestrantes(images);
    var buttonEntrar = getButtonEntra();
    palestrates.append(imagePalestrantes);
    palestrates.append(buttonEntrar);
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

function getDiVImgPalestrantes(palestrantes) {
    let quadroImage = document.createElement("div");
    let row = document.createElement("div");
    quadroImage.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11");
    row.setAttribute("class", "row speaker_icons");
    [].forEach.call(palestrantes, (palestrante) => {
        let img = document.createElement("img");
        let col = document.createElement("div");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("alt", "Card image");
        img.setAttribute("style", "width: 100%;");
        img.setAttribute("src", palestrante.url_imagem);
        col.setAttribute("class", "col-4 col-sm-4 col-md-2 col-lg-1 col-xl-1 link_social_linha");
        col.append(img);
        row.append(col);
    });
    quadroImage.append(row);
    return quadroImage;

}


function getButtonEntra(id) {
    let quadroButton = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn_full");
    button.setAttribute("href", "#");
    button.setAttribute("value", id);
    button.innerHTML = "Entrar";
    button.addEventListener("click", function() {
        alert("ativou" + id);
    })
    quadroButton.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 center_Itens_end");
    quadroButton.append(button)
    return quadroButton;
}


//funções para abrir menu        
function openNav(x) {
    //x.classList.toggle("change");
    let menu = get_element("myNav");
    let btn_hamburger = get_element(x);
    if (typeof parent.gjsEditor == "undefined") {
        menu.style.width = "100%";
        btn_hamburger.style.display = "none";
    } else {
        menu.setAttributes({ "style": "width: 100%;" });
        btn_hamburger.setAttributes({ "display": "none" });
    }

}



//funções para abrir menu
function closeNav() {
    let buttonNenuID = logado == "s" ? "btn_registerd" : "btn_unregisterd";
    let menu = get_element("myNav");
    let btn_hamburger = get_element(buttonNenuID);
    if (typeof parent.gjsEditor == "undefined") {
        menu.style.width = "0";
        btn_hamburger.style.display = "block";
    } else {
        menu.setAttributes({ "style": "width: 0;" });
        btn_hamburger.setAttributes({ "display": "block" });
    }




}






module.exports = {
    init: init,
    openNav: openNav,

};