export function createTodo (title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

export function createProject (pjName){
    return {
        projectname: pjName,
        content: [],
    }
}

export function addToProject (todo, project){
    project.content.push(todo)
}

function createDom (todo){
    let container = document.createElement('div');
    container.classList.add('todoContainer');

    let title = document.createElement('h3');
    title.classList.add('todotitle');
    title.innerHTML = todo.title;
    container.appendChild(title);
    
    let description = document.createElement('p');
    description.innerHTML = todo.description;
    container.appendChild(description);

    let dueDate = document.createElement('p');
    dueDate.innerHTML = `This todo is due on the ${todo.dueDate}`;
    container.appendChild(dueDate);

    container = todoSetPriority(todo, container);

    return container;
}

export function showProject(project, container){
    let projectContainer = document.createElement('div');
    projectContainer.innerHTML = project.projectname;
    projectContainer.classList.add('project');
    project.content.forEach(todo => {
        projectContainer.appendChild(createDom(todo));
    container.appendChild(projectContainer);
    });

}

function todoSetPriority (todo, container) {
    if (todo.priority == 2){
        container.style.backgroundColor = '#ffb3b3'
        return container
    } else if (todo.priority == 1) {
        container.style.backgroundColor = '#ffff66'
        return container
    }else {
        return container
    }
}