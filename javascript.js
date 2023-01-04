botones("btn_1", "hideText1","Más información", "hideText2","hideText3","hideText4")
botones("btn_2", "hideText2", "Más información","hideText1","hideText3","hideText4")



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


