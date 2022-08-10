// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;

        this.classList.add("active");
        
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }
        
        handleTransition(this, text);
        activeButton = this;

    });

    
});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;

        text.classList.add("active");
        
    });

}

// ANIMATION CATEGORY

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})




// GALLERY 



// FILTER 


    // FILTER CAT
$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
   


        
        var filter = $(this).attr('data-filter')

        if(filter == 'Tout-cat'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });




    // FILTER année 

    $('.button-annee').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
   


        
        var filter = $(this).attr('data-filter')

        if(filter == 'tout_annee'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });



    


// POPUP


//   $(function() {
    
//     // var link = document.getElementById("myLink").addEventListener("click", );

//     // var href = link.getAttribute('title'); 

 
//     var obj = document.getElementById("mylink")
//     obj.onclick = function() {
          
//     }
    

//     var pic = document.getElementById("img")
//     pic.onclick = function() {
          
//     }
//     var data = [
//         {
//           username: obj, 
//           userWebsite_href: 'travaux/m1206/sequence1/index.html', 
//           userAvatarUrl_img: pic,
//           userLocation: 'Tout premier site réalisé dans en html'

//         },
//     ]




    
//     $('div.content-container').magnificPopup({ 
//         key: 'my-popup', 
//         gallery: { enabled: false},
//         items: data,
//         type: 'inline',
//         inline: {
//           // Define markup. Class names should match key names.
//           markup: '<div class="white-popup"><div class="mfp-close"></div>'+
//                     '<a class="mfp-userWebsite">'+
//                       '<div class="mfp-userAvatarUrl"></div>'+
//                       '<h2 class="mfp-username"></h2>'+
//                     '</a>'+
//                     '<div class="mfp-userLocation"></div>'+
//                   '</div>'
//         },})})

   


});








