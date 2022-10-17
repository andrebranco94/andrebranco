

//HAMBURGUER MENU

var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu-mobile');

// show or hide
menuButton.addEventListener('click',function(){
    
    if(menu.style.display=="flex"){
        menu.style.display="none";
    } else {
        menu.style.display="flex";
    }
    
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
   
});




//BOTOES TAMANHO DO TEXTO

var aumentar_size=document.getElementById("aumentar_size");
var diminuir_size=document.getElementById("diminuir_size");
var descricao = document.getElementById("descricao");

var font_size = window.getComputedStyle(descricao,null).getPropertyValue('font-size');

var currentSize = parseFloat(font_size);

var lineheight= window.getComputedStyle(descricao,null).getPropertyValue('line-height');
var currentlineHeight = parseFloat(lineheight);



aumentar_size.addEventListener("click", function () {
    font_size =window.getComputedStyle(descricao,null).getPropertyValue('font-size');
    currentSize = parseFloat(font_size);
    lineheight=window.getComputedStyle(descricao,null).getPropertyValue('line-height');
    currentlineHeight = parseFloat(lineheight);
        descricao.style.lineHeight= (currentlineHeight + 20) +'px';
    descricao.style.fontSize = (currentSize + 10) + 'px';
    aumentar_size.style.display="none";
   diminuir_size.style.display="inline";
});

diminuir_size.addEventListener("click", function () {
    font_size =window.getComputedStyle(descricao,null).getPropertyValue('font-size');
    currentSize = parseFloat(font_size);
    lineheight=window.getComputedStyle(descricao,null).getPropertyValue('line-height');
    currentlineHeight = parseFloat(lineheight);
        descricao.style.lineHeight= (currentlineHeight - 20) +'px';
    descricao.style.fontSize = (currentSize - 10) + 'px';
    aumentar_size.style.display="inline";
   diminuir_size.style.display="none";
});































