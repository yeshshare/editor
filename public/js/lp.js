 if (logado == "undefined") {
     var logado = 'n'
 }


 try {
     var menu_registred = document.getElementById("menu_registerd");
     var menu_unregisterd = document.getElementById("menu_unregisterd");
     menu_registred.style.display = (logado == 's') ? "block" : "none";
     menu_unregisterd.style.display = (logado == 'n') ? "block" : "none";
 } catch (error) {

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