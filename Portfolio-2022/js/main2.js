const modal = document.getElementById('modal')

//Show modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal')
})

//Hide modal
close.addEventListener('click', (e) => {
  modal.classList.remove('show-modal')
})