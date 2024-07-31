fetch('../maquinaria/app-data.json')

.then(response => response.json())
.then(data => {
    const MachinesContainer = document.querySelector('.machines-container');
    data.Maquinas.forEach(machine => {
        const machineElement = document.createElement('div');
        machineElement.className = `machine machine-${machine.id} ${machine['machine-label']} flex-column gap-10`;
        machineElement.dataset.filter = machine['machine-label'];

        const characteristicsList = machine['machine-characteristics'][0];
        let characteristicsHTML = '<ul class="machine-characteristics">';
        for (let key in characteristicsList) {
            if (characteristicsList.hasOwnProperty(key)) {
                characteristicsHTML += `<li><p class="text">${characteristicsList[key]}</p></li>`;
            }
        }
        characteristicsHTML += '</ul>';

        machineElement.innerHTML = `
            <div class="machine-photo">
                <a href="${machine['machine-img']}" target="_blank">
                    <img src="${machine['machine-img']}" alt="${machine['machine-alt']} | Grúas Ememca SAC">
                </a>
            </div>
            <div class="machine-description flex-column gap-10">
                <h3 class="machine-name text-title">${machine['machine-name']}</h3>
                <p class="text-sub-title">Especificaciones:</p>
                ${characteristicsHTML}
                <a href="#contacto" class="button-link button-link-principal margin-left-auto">
                    <p class="button-link-text">Cotizar</p>
                </a>
            </div>
        `;
        MachinesContainer.appendChild(machineElement);
    });

    // <p class="text">${machine['machine-short-description']}</p>

    const Machine = document.querySelectorAll('.machine');
    Machine.forEach(machine => {
        machine.style.display = 'block';
    });
})
.catch(error => console.error('Error fetching data:', error));