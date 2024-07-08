fetch('./app-data.json')
    .then(response => response.json())
    .then(data => {
        const IndexProjectsContainer = document.querySelector('.projects');
        data.Proyectos.forEach(proyecto => {
            const projectElement = document.createElement('div');
            projectElement.id = `proyecto-${proyecto.id}`;
            projectElement.className = `project project-${proyecto.id} flex-column gap-10`;
            projectElement.innerHTML = `
                <img class="project-img" src="${proyecto['project-img']}" alt="Grúas Ememca SAC">
                <p class="text-title">${proyecto['project-title']}</p>
                <p class="text">${proyecto['project-short-description']}</p>
                <p class="text">${proyecto['project-large-description']}</p>
            `;
            IndexProjectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));