var sidemenu = document.getElementById("sidemenu"); 
function openmenu(){
    sidemenu.style.right = "0"; 

}
function closemenu(){
    sidemenu.style.right = "-200px"; 
    
}

const sr = ScrollReveal({
    distance: '45px',
    duration:2700,
    reset:true

})

sr.reveal('.hero-intro .main',{delay:350,origin:'top'})
sr.reveal('.hero-intro .intro,.hero-intro .btn-div',{delay:355,origin:'right'})
sr.reveal('.project .title',{delay:355,origin:'left'})
sr.reveal('#match.work,#maiko.work,#coming.work',{delay:350,origin:'bottom'})
sr.reveal('.about,.contact',{delay:340,origin:'bottom'})
