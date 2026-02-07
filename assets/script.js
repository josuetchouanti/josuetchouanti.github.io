
document.addEventListener('DOMContentLoaded', function(){
  const hero = document.querySelector('.hero');
  if(hero && hero.dataset.hero) hero.querySelector('.hero-overlay').style.backgroundImage = 'url('+hero.dataset.hero+')';
  const photo = document.querySelector('.photo');
  if(photo && photo.dataset.photo) photo.src = photo.dataset.photo;
});
