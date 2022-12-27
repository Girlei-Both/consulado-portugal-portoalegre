/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS PRINCIPAIS*/

/*Procura no documento as classes MENU*/
const menus = document.querySelectorAll(".menu");

/*Ação que será realizada a cada clique do mouse*/
menus.forEach(menu => {
    menu.addEventListener("click", function(){
        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menu.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenu(menu)
        mostrarConteudoDoMenu(menu)
    });
});

/*Função para localizar o MENU SELECIONADO - Principal*/
function selecionarMenu(menu){
    const menuSelecionado = document.querySelector(".menu.selecionado");
    menuSelecionado.classList.remove("selecionado");
    menu.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA SELECIONADA - Principal*/
function mostrarConteudoDoMenu(menu){
    const conteudoSelecionado = document.querySelector(".informacao.selecionado");
    conteudoSelecionado.classList.remove("selecionado");
    const idDoConteudoAba = `informacao-${menu.id}`;
    const conteudoMostrado = document.getElementById(idDoConteudoAba);
    conteudoMostrado.classList.add("selecionado");
}




/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS SECUNDÁRIOS*/

/*Procura no documento as classes MENU-*/
const menu_Um = document.querySelectorAll(".menu-um");

/*Ação que será realizada a cada clique do mouse*/
menu_Um.forEach(menu_Um => {
    menu_Um.addEventListener("click", function(){

        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menu_Um.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenu_Um(menu_Um)
        mostrarConteudoDoMenu_Um(menu_Um)
    })
})

/*Função para localizar o MENU- SELECIONADO*/
function selecionarMenu_Um(menu_Um){
    const menuSubSelecionado = document.querySelector(".menu-um.selecionado");
    menuSubSelecionado.classList.remove("selecionado");
    menu_Um.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA- SELECIONADA*/
function mostrarConteudoDoMenu_Um(menu_Um){
    const conteudoSubSelecionado = document.querySelector(".informacao-um.selecionado");
    conteudoSubSelecionado.classList.remove("selecionado");
    const idDoConteudoSubAba = `informacao-${menu_Um.id}`;
    const conteudoSubMostrado = document.getElementById(idDoConteudoSubAba);
    conteudoSubMostrado.classList.add("selecionado");
}






/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS SECUNDÁRIOS*/

/*Procura no documento as classes MENU-*/
const menu_Dois = document.querySelectorAll(".menu-dois");

/*Ação que será realizada a cada clique do mouse*/
menu_Dois.forEach(menu_Dois => {
    menu_Dois.addEventListener("click", function(){

        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menu_Dois.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenu_Dois(menu_Dois)
        mostrarConteudoDoMenu_Dois(menu_Dois)
    })
})

/*Função para localizar o MENU- SELECIONADO*/
function selecionarMenu_Dois(menu_Dois){
    const menuSubSelecionado = document.querySelector(".menu-dois.selecionado");
    menuSubSelecionado.classList.remove("selecionado");
    menu_Dois.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA- SELECIONADA*/
function mostrarConteudoDoMenu_Dois(menu_Dois){
    const conteudoSubSelecionado = document.querySelector(".informacao-dois.selecionado");
    conteudoSubSelecionado.classList.remove("selecionado");
    const idDoConteudoSubAba = `informacao-${menu_Dois.id}`;
    const conteudoSubMostrado = document.getElementById(idDoConteudoSubAba);
    conteudoSubMostrado.classList.add("selecionado");
}





/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS SECUNDÁRIOS*/

/*Procura no documento as classes MENU-*/
const menu_Tres = document.querySelectorAll(".menu-tres");

/*Ação que será realizada a cada clique do mouse*/
menu_Tres.forEach(menu_Tres => {
    menu_Tres.addEventListener("click", function(){

        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menu_Tres.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenu_Tres(menu_Tres)
        mostrarConteudoDoMenu_Tres(menu_Tres)
    })
})

/*Função para localizar o MENU- SELECIONADO*/
function selecionarMenu_Tres(menu_Tres){
    const menuSubSelecionado = document.querySelector(".menu-tres.selecionado");
    menuSubSelecionado.classList.remove("selecionado");
    menu_Tres.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA- SELECIONADA*/
function mostrarConteudoDoMenu_Tres(menu_Tres){
    const conteudoSubSelecionado = document.querySelector(".informacao-tres.selecionado");
    conteudoSubSelecionado.classList.remove("selecionado");
    const idDoConteudoSubAba = `informacao-${menu_Tres.id}`;
    const conteudoSubMostrado = document.getElementById(idDoConteudoSubAba);
    conteudoSubMostrado.classList.add("selecionado");
}

/*
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
*/