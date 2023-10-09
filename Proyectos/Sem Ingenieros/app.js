//Hamburguer
lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

menu = document.querySelector('.menu')

function openMenu(){
    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')

    menu.classList.toggle('menu__active')
}

function closeMenu(){
    lineOne.classList.remove('line-1__active')
    lineTwo.classList.remove('line-2__active')
    lineThree.classList.remove('line-3__active')

    menu.classList.remove('menu__active')
}

transparent = document.querySelector('.transparent')
function transparentActive(){
    transparent.classList.add('transparent__active')
}

function transparentRemove(){
    transparent.classList.remove('transparent__active')
    servicieOne.classList.remove('servicieContainer__active')
    servicieTwo.classList.remove('servicieContainer__active')
    servicieThree.classList.remove('servicieContainer__active')
}

//Servicie
servicieOne = document.querySelector('.servicie-1')
servicieTwo = document.querySelector('.servicie-2')
servicieThree = document.querySelector('.servicie-3')

function servicieOneActive(){
    servicieOne.classList.add('servicieContainer__active')
}
function servicieTwoActive(){
    servicieTwo.classList.add('servicieContainer__active')
}
function servicieThreeActive(){
    servicieThree.classList.add('servicieContainer__active')
}

//Form
thanks = document.querySelector('.thanks')
function thanksActive(){
    thanks.classList.add('thanks__active')
}
function closeThanks(){
    thanks.classList.remove('thanks__active')
}

const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'aplication/json'
        }
    })
    if (response.ok){
        this.reset()
        thanksActive()
        transparentActive()
    }
}