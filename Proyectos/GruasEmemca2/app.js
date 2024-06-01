//Header

const Menu = document.querySelector('.menu');
const Hamburguer = document.querySelector('.hamburguer-icon');
const Header = document.querySelector('header');

Hamburguer.addEventListener('click', MenuActive);

function MenuActive(){
    Menu.classList.toggle('active');
    Hamburguer.classList.toggle('active');
}

window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 50){
        Header.classList.add('active');
    } else {
        Header.classList.remove('active');
        MenuDesactive();
    };
}

function MenuDesactive(){
    Menu.classList.remove('active');
    Hamburguer.classList.remove('active');
}

const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', function() {
        MenuDesactive();
    });
});

//Machines

fetch('app-data.json')
.then(response => response.json())
.then(data => {
    const MachinesContainer = document.querySelector('.machines-container');
    data.Maquinas.forEach(machine => {
        const machineElement = document.createElement('a');
        machineElement.href = `#Maquina-${machine.id}`;
        machineElement.className = `machine machine-${machine.id} ${machine['machine-label']}`;
        machineElement.dataset.filter = machine['machine-label'];
        machineElement.innerHTML = `
            <div class="machine-photo">
                <img src="${machine['machine-img']}" alt="Grúas Ememca SAC">
            </div>
            <h3 class="machine-name">${machine['machine-name']}</h3>
            <p class="text machine-description">${machine['machine-short-description']}</p>
        `;
        MachinesContainer.appendChild(machineElement);
    });

    const Machine = document.querySelectorAll('.machine');
    Machine.forEach(machine => {
        machine.style.display = 'block';
    });

    // Machine's filter
    const FilterButtons = document.querySelectorAll('.machine-button');

    FilterButtons.forEach(button => {
        button.addEventListener('click', function(){
            FilterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            Machine.forEach(machine => {
                machine.style.display = 'none';
                if (filter === 'Todos' || machine.classList.contains(filter)){
                    machine.style.display = 'block';
                }
            });
        });
    });
})
.catch(error => console.error('Error fetching data:', error));

//Machine-active

fetch('app-data.json')
.then(response => response.json())
.then(data => {
    const MachinesSelectContainer = document.querySelector('.machines-select-container');
    data.Maquinas.forEach(machineSelect => {
        const machineSelectContainer = document.createElement('div');
        machineSelectContainer.id = `Maquina-${machineSelect.id}`;
        machineSelectContainer.className = 'machine-select-container';

        // Crear la lista de características
        let characteristicsList = '';
        machineSelect['machine-characteristics'].forEach(characteristic => {
            Object.values(characteristic).forEach(value => {
                characteristicsList += `<li>${value}</li>`;
            });
        });

        machineSelectContainer.innerHTML = `
            <div class="machine-select">
                <div>
                    <a href="#Maquinas" class="button-link close-machine">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                    
                    <div class="machine-principal-image">
                        <img class="machine-principal-image-bg" src="${machineSelect['machine-img-bg']}" alt="Grúas Ememca SAC">
                        <div class="layer"></div>
                        <img class="machine-principal-image-machine" src="${machineSelect['machine-img']}" alt="Grúas Ememca SAC">
                    </div>

                    <h3>${machineSelect['machine-name']}</h3>
                    
                    <div class="machine-general-description">
                        <p class="text">${machineSelect['machine-large-description']}</p>
                        <ul class="machine-characteristics">
                            <p class="text">Características</p>
                            ${characteristicsList}
                        </ul>
                    </div>
                    
                    <div class="machine-select-buttons">
                        <a href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                    </div>
                </div>
            </div>
        `;
        MachinesSelectContainer.appendChild(machineSelectContainer);
    });
})
.catch(error => console.error('Error fetching data:', error));


//Recent works

fetch('app-data.json')
.then(response => response.json())
.then(data => {
    const WorksContainer = document.querySelector('.works');
    data.Trabajos.forEach(work => {
        const workElement = document.createElement('a');
        workElement.href = `#Trabajo-${work.id}`;
        workElement.className = `work work-${work.id}`;
        workElement.innerHTML = `
            <img src="${work['work-img']}" alt="Grúas Ememca SAC">
            <div class="work-info">
                <h3 class="work-title">${work['work-title']}</h3>
                <span class="work-date">${work['work-date']}</span>
            </div>
            <p class="text work-resume">${work['work-resume']}</p>
        `;
        WorksContainer.appendChild(workElement);
    });
})
.catch(error => console.error('Error fetching data:', error));

//Recent works-active

// fetch('app-data.json')
// .then(response => response.json())
// .then(data => {
//     const MachinesSelectContainer = document.querySelector('.machines-select-container');
//     data.Maquinas.forEach(machineSelect => {
//         const machineSelectContainer = document.createElement('div');
//         machineSelectContainer.id = `Maquina-${machineSelect.id}`;
//         machineSelectContainer.className = 'machine-select-container';
//         machineSelectContainer.innerHTML = `
//             <div class="machine-select">
//                 <div>
//                     <a href="#Maquinas" class="button-link close-machine">
//                         <i class="fa-solid fa-xmark"></i>
//                     </a>
                    
//                     <div class="machine-principal-image">
//                         <img class="machine-principal-image-bg" src="${machineSelect['machine-img-bg']}" alt="Grúas Ememca SAC">
//                         <div class="layer"></div>
//                         <img class="machine-principal-image-machine" src="${machineSelect['machine-img']}" alt="Grúas Ememca SAC">
//                     </div>

//                     <h3>${machineSelect['machine-name']}</h3>
//                     <p class="text">${machineSelect['machine-large-description']}</p>
                    
//                     <div class="machine-select-buttons">
//                         <a href="">1</a>
//                         <a href="">2</a>
//                         <a href="">3</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//         MachinesSelectContainer.appendChild(machineSelectContainer);
//     });
// })
// .catch(error => console.error('Error fetching data:', error));

//Maps

const MapOneButton = document.querySelector('.map-list-button-1');
const MapOne = document.querySelector('.map-1');

const MapTwoButton = document.querySelector('.map-list-button-2');
const MapTwo = document.querySelector('.map-2');

MapOneButton.addEventListener('click', function(){
    MapOneButton.classList.add('active');
    MapOne.classList.add('active');

    MapTwoButton.classList.remove('active');
    MapTwo.classList.remove('active');
})

MapTwoButton.addEventListener('click', function(){
    MapOneButton.classList.remove('active');
    MapOne.classList.remove('active');

    MapTwoButton.classList.add('active');
    MapTwo.classList.add('active');
})

//Form

let Teléfono = document.getElementById("Teléfono");

Teléfono.addEventListener("input", (event) => {
    if (event.target.value.length > 9) {
        event.target.value = event.target.value.substring(0, 9);
    }
});

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form, headers:{'Accept': 'aplication/json'}
    })
    if (response.ok){
        this.reset();
        FormSended();
    }
}

const FormSend = document.querySelector('.form-send-container');
const WhatsApp = document.querySelector('.whatsApp');

function FormSended(){
    FormSend.classList.add('active');
    WhatsApp.classList.add('form-sended');
    
    setTimeout(() => {
        FormSend.classList.remove('active');
        WhatsApp.classList.remove('form-sended');
    }, 3000);
}