//Dark Mode
const darkButton = document.querySelector('.dark-button');

darkButton.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');

	if(document.body.classList.contains('dark-mode')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

//App data

const instagramLink = 'https://www.instagram.com/leosoplapuco/'
const instagram = document.querySelectorAll(".instagram");
instagram.forEach((instagram) => {
    instagram.href = instagramLink;
});

const githubLink = 'https://github.com/leosoplapuco'
const github = document.querySelectorAll(".github");
github.forEach((github) => {
    github.href = githubLink;
});

const linkedinLink = 'https://www.linkedin.com/in/leosoplapuco/'
const linkedin = document.querySelectorAll(".linkedin");
linkedin.forEach((linkedin) => {
    linkedin.href = linkedinLink;
});

//Form
const $form = document.querySelector('#form');

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
    }
}