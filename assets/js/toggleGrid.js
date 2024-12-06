const gridButton =document.querySelector(".grid-button");
const listButton =document.querySelector(".list-button");
const cardContainer =document.querySelector(".listing-cards");
const cards =document.querySelectorAll(".ppt-card");
const img=document.querySelectorAll(".ppt-img")





gridButton.addEventListener('click',()=>{
  cardContainer.classList.add("grid")
  cards.forEach(card=>{
    card.classList.remove("property-card-flex")
    card.classList.add("property-card-grid")
    
   })
});



listButton.addEventListener('click',()=>{ 
  cardContainer.classList.remove("grid")
   cards.forEach(card=>{
    card.classList.remove("property-card-grid")
    card.classList.add("property-card-flex")
    
   })
   
   
    
});