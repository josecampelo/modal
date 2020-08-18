const modalOverlay = document.querySelector('.modal-overlay')
const p = document.querySelectorAll('.p')
const modalContent = document.querySelector('.modal-content')

for(let link of p){
    link.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        modalContent.querySelector('iframe').src="https://www.youtube.com/embed/yo4pmauhugo"
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalContent.querySelector('iframe').src=""
})