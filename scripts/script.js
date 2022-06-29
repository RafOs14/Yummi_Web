/* Anclajes a las secciones de la pagina */
(function(){
    $('a[href*=#ancla]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 800);
                return true;
            }
        }
    });
});
/*Fin de anclajes */


/* Boton de cambio de precios */
var estado = true 
let accept=document.getElementById("accept");
accept.addEventListener('change', function(e) {
   if(estado == true){
        // mensual
        document.getElementById("starterTextPrice").innerHTML = "";
        document.getElementById("starterPrice").innerHTML = "<span>$79.900</span> / mes";
        document.getElementById("startedText-muted").innerHTML = "Facturado mensual";

        document.getElementById("premiumTextPrice").innerHTML = "";
        document.getElementById("premiumPrice").innerHTML = "<span>$139.900</span> / mes";
        document.getElementById("premiumText-muted").innerHTML = "Facturado mensual";       
        
        estado = false
   }else{
        // Anual
        document.getElementById("starterTextPrice").innerHTML = "$79.900";    
        document.getElementById("starterPrice").innerHTML = "<span>$39.950</span> / mes";   
        document.getElementById("startedText-muted").innerHTML = "Facturado anual";   

        document.getElementById("premiumTextPrice").innerHTML = "$139.900";
        document.getElementById("premiumPrice").innerHTML = "<span>$69.950</span> / mes";
        document.getElementById("premiumText-muted").innerHTML = "Facturado anual";    
    
        estado=true
   }
});


/* Fin boton cambio de precios */

/* Inicio de animaciones Ver Mas - Ver Menos */
let elemento = document.getElementById('ocultar');
let mas = document.getElementById('btnmas');
let menos = document.getElementById('btnmenos');

elemento.style.display = 'none';
menos.style.display = 'none';

function mostrarDiv(){
    elemento.style.display = '';
    mas.style.display = 'none';
    menos.style.display = '';
}

function ocultarDiv(){
    elemento.style.display = 'none';
    mas.style.display = '';
    menos.style.display = 'none';
}
/* Fin de animaciones Ver Mas - Ver Menos */
