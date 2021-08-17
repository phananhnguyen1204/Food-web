const imageSlider=(element1)=>{
    document.querySelector('#big-image').src=element1;
}
const  changeBackgroundColor= (element2)=>{
  const background=document.querySelector('.background');
    background.style.background=element2;
}

function toggleMenu (element3){
  var menuToggle=document.querySelector('.toggle');
  var nav=document.querySelector('.nav-bar');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  
  
  
}


