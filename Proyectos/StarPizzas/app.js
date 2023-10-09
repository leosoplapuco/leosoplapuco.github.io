modalButton = document.querySelector('.modalButton-2')
modalButton.addEventListener('click', modalAccept)
modal = document.querySelector('.modal')
layer = document.querySelector('.layer')

function modalAccept(){
    modal.classList.add('accept')
    layer.classList.add('accept')
}

hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuOpen)
lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

header = document.querySelector('header')

nav = document.querySelector('nav')

linkOne = document.querySelector('.link-1')
linkOne.addEventListener('click', menuClose)
linkTwo = document.querySelector('.link-2')
linkTwo.addEventListener('click', menuClose)
linkThree = document.querySelector('.link-3')
linkThree.addEventListener('click', menuClose)
linkFour = document.querySelector('.link-4')
linkFour.addEventListener('click', menuClose)
linkFive = document.querySelector('.link-5')
linkFive.addEventListener('click', menuClose)

function menuOpen(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    nav.classList.toggle('active')
}

function menuClose(){
    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    nav.classList.remove('active')
}

form = document.querySelector('form')
formButtonOne = document.querySelector('.formButton-1')
formButtonOne.addEventListener('click', prevFormPart)
formButtonTwo = document.querySelector('.formButton-2')
formButtonTwo.addEventListener('click', nextFormPart)

function nextFormPart(){
    form.style.marginLeft = "-100%";

    if(form.style.marginLeft = "-100%"){
        formButtonOne.classList.remove('disable')
        formButtonTwo.classList.add('disable')
    }
}

function prevFormPart(){
    form.style.marginLeft = "0";

    if(form.style.marginLeft = "0"){
        formButtonOne.classList.add('disable')
        formButtonTwo.classList.remove('disable')
    }
}

// const $form = document.querySelector('#form')
// $form.addEventListener('submit', handleSubmit)
// async function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers:{
//             'Accept': 'aplication/json'
//         }
//     })
//     if (response.ok){
//         this.reset()
//         thanksActive()
//     }
// }