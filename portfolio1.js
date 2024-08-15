const circles = document.querySelectorAll('.inner-circle-container'); 
circles.forEach(element=>{
  var dots = element.getAttribute("dataDots");
  var marked = element.getAttribute("dataPercent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;
for(let i = 0 ; i < dots ; i++){
points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
}
element.innerHTML = points; 
const pointsMarked = element.querySelectorAll('.points');
for(let i = 0; i < percent; i++){
pointsMarked[i].classList.add('marked')
}  
})  

let div1 = document.querySelectorAll('div');
let navBar = document.querySelectorAll('header nav a');

window.onscroll = () => {
div1.forEach(dv1 => {
    let top = window.scrollY;
    let offset = dv1.offsetTop - 20;
    let height  = dv1.offsetHeight;
    // let id = div1.getAttribute('id');

    if(top >= offset && top < offset + height){
        dv1.classList.add('show-animate')

        navBar.forEach(links => {
            links.classList.remove('about');
            document.querySelector('header nav a [href*='+ id + ']').classList.add('about');
        })
    }
  
    else{
        dv1.classList.remove('show-animate');
    }
})
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { // Use entry instead of entries within forEach
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const elements = document.getElementById('jobTitle'); // Use getElementById for single element
  observer.observe(elements); // Observe the single element
  
