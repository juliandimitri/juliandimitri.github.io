botones("btn_1", "hideText1","Más información", "hideText2","hideText3","hideText4")
botones("btn_2", "hideText2", "Más información","hideText1","hideText3","hideText4")
botones("btn_3", "hideText3", "Técnico en Secretaria de Seguridad","hideText1","hideText2","hideText4")
botones("btn_4", "hideText4", "Operador Técnico en Marambio","hideText1","hideText2","hideText3")

function botones(boton, hiden, especialidad, hiden1, hiden2, hiden3){
    
    let readMore_btn = document.getElementById(boton);
    let hideText = document.getElementById(hiden);
    
    readMore_btn.addEventListener('click', toggleText);

    function toggleText() {
    hideText.classList.toggle('showText');

    if(hideText.classList.contains('showText')) {
        readMore_btn.innerHTML = 'Ocultar'
    }
    else {
        readMore_btn.innerHTML = especialidad
    }
    }
    
    
   

}