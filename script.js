let college = document.querySelector(".parallax");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  college.style.transform = `perspective(1000px) rotateX(${value / 1.55}deg)`;
  college.style.background = `linear-gradient(to right,  #5569DC, aqua ${value % 200}%, #5569DC)`;
  college.style.boxShadow = `0px ${value / 20}px ${value / 10}px rgba(0, 0, 0, 0.5)`;
  college.style.letterSpacing = `${Math.min(value / 0.625, 1.25)}px`;
});
let photo = document.getElementById('name');
photo.addEventListener("mouseover", () => {
  photo.classList.add('zoomed');
});
photo.addEventListener('mouseout', () => {
  photo.classList.remove('zoomed'); 
});



