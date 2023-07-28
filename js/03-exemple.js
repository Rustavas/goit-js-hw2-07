window.addEventListener('keydown', onEscKeyPress);
function onEscKeyPress(event) {
  if(event.code === 'Escape') {
    console.log(event)
  }
}