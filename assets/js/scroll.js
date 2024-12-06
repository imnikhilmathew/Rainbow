const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("trigger");
    } 
    // else
    //  entry.target.classList.remove("trigger");
  });
  
});
const slideLeft = document.querySelectorAll(".slide-right,.slide-left,.fade-in,.button-slide-left,.line,.slide-up,.slide-down");





slideLeft.forEach((el) => observer.observe(el));


















const arch = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".slide-up-semi").classList.add("semi-trigger");
    } 
    // else
    //  entry.target.classList.remove("trigger");
  });
  
});
const archUp = document.querySelectorAll(".last-card");





archUp.forEach((el) => arch.observe(el));


