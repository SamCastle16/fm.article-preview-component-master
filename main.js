const shareBtn = document.querySelector('#shareBtn');

shareBtn.addEventListener('click', () => {
  document
    .querySelector('.share-container')
    .classList.toggle('share-container--active-mobile');

  if (
    document.querySelector('.icon-share path').getAttribute('fill') == '#6E8098'
  ) {
    document.querySelector('.icon-share path').setAttribute('fill', '#fff');
  } else {
    document.querySelector('.icon-share path').setAttribute('fill', '#6E8098');
  }

  shareBtn.classList.toggle('container-icon-share--active');
});
