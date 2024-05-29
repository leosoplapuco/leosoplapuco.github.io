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
            <div class="mahine-photo">
                <img src="${machine['machine-img']}" alt="Grúas Ememca">
            </div>
            <h3 class="machine-name">${machine['machine-name']}</h3>
            <p class="text machine-description">${machine['machine-description']}</p>
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
            <img src="${work['work-img']}" alt="">
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