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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const observer = new InterdivObserver((entries) =>{
//     entries.forEach((entries) => {
//       console.log(entries);
//       if(entries.isIntersecting){
//         entries.target.classList.add('show');
//       }
//       else{
//         entries.target.classList.remove('show');
//       }
//     });
//   });
  
//   // const elements = document.querySelector('.animate__animated.animate__fadeInLeft', '.mainContainer2', '.mainContainer3', '.mainContainer4');
//   const elements = document.getElementById('jobTitle');
//   elements.forEach((element) => observer.observe (element));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


// const div2 = document.querySelector(".descripion");
// const des = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum debitis facere laborum. Nisi aliquid deserunt doloribus issllo quod illum harum Lorem ipsum, dolor sit amet consectetur adipisicing elit.Tenetur sunt illo, cupiditate saepe voluptas natus ut expedita adipisci pariatur, eligendi in rerum! Iusto amet eius neque eligendi est error iste.Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

// function textTypingEffect(element, des, i = 0){
// if(i === 0){
//     element.textContent = " ";
// }
// element.textContent += des[i];

// if(i === des.length - 1){
//     return;
// }
// setTimeout(() => textTypingEffect(element, des, i + 1), 30);
// }
// textTypingEffect(div2, des);




// ScrollReveal({ 
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 400
// });
// ScrollReveal().reveal('.leftSide1', { delay: 500, origin: 'right', duration: 3000 });
// ScrollReveal().reveal('.rightText', { delay: 400, origin: 'right' });
// ScrollReveal().reveal('.leftSide3', { delay: 500, origin: 'right' });
// ScrollReveal().reveal('.skillBar',  { delay: 900, origin: 'right' });
// ScrollReveal().reveal('span',       { delay: 500, origin: 'right' });






document.getElementById("btn").onclick = function () {
    window.location.href = "miss.php";
};


// let sections = document.querySelectorAll('section');
// let navBar = document.querySelectorAll('header nav a');



// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top1 = window.scrollY;
//         let offset1 = sec.offsetTop;
//         let height1  = sec.offsetHeight;
//         let id = sec.getAttribute('id');

    
//         if(top1 >= offset1 && top1 < offset1 + height1){
//             navBar.forEach(links => {
//                 links.classList.remove()
//             })
//         }
      
//         else{
//             dv1.classList.remove('show-animate');
//         }
    
//     })
// }





// function refresh(){
//     window.location.reload();
// }
// setInterval(refresh,3000);



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
  