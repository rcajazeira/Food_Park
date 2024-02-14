let navBar = document.getElementById("navegar");


function iniciou(){

    navBar.style.marginTop="150px";

}











function TamScreen(){
                
    if( window.screen.width >=560 && window.screen.height >= 920){
                return slides= 3
        }else{
                return slides= 1
        } 
    
}

window.addEventListener('resize', function(){
    TamScreen();

});

$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,   // tentativa de exibir 3
        slidesToScroll: 3, // tentativa de três em três
        autoplay: true,
        autoplaySpeed: 2010,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        centerMode: true,
        centerPadding: '0',
    });
});



addEventListener("scroll", (event) => {

    var fixagem= document.getElementsByClassName("fixagem-area")[0];
    var hd = document.getElementsByTagName("header")[0];
    var  ScrollPosition = window.scrollY;
    if(ScrollPosition > 150){

        fixagem.style.position = "fixed";
        hd.style.position = "absolute"
        fixagem.style.top ="0px"
        
     
    }else{
        fixagem.style.position = "absolute"
        hd.style.position = "relative"   
        fixagem.style.top ="150px"
       

    }


});



addEventListener("scroll", (event) => {
    var posicao=window.scrollY;
    const nav = document.getElementById("navegar");
    const video = document.getElementById("videlIframe");
    const mapa = document.getElementById("mapeamento");
        if (posicao > 16480) {
        //    nav.style.opacity="0.9";
           nav.style.opacity="0.1";
           video.style.opacity="0";

           mapa.style.opacity="0";
        }

        else {
            nav.style.opacity="1";
            video.style.opacity="1";
            mapa.style.opacity="1";
        }
    })
   