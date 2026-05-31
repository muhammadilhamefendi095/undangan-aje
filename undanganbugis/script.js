function openInvitation(){

  document
  .querySelector('.hero')
  .style.display = 'none';

  document
  .getElementById('main-content')
  .classList.remove('hidden');

  document
  .getElementById('music')
  .play();

}