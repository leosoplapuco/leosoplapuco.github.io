const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

//Form

layer = document.querySelector('.layer')
layer.addEventListener('click', thanksDesactive)

thanks = document.querySelector('.thanksContent')

close = document.querySelector('.thanksClose i')
close.addEventListener('click', thanksDesactive)

function thanksActive(){
	layer.classList.add('layer__active')
	thanks.classList.add('thanks__active')
}

function thanksDesactive(){
	layer.classList.remove('layer__active')
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
    }
}