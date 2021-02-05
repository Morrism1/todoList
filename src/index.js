import './style.css'
import todocard from './addtodo'
const projects = document.querySelector('[data-lists]');

let lists = [
    {
        id: 1,
        name: 'project1'
    },
    {
        id: 2,
        name: 'project1'
    }
]

function renderP()
{ clearList(projects);
    lists.forEach(list =>
        {
            const project= document.createElement('li');
            project.classList.add="list-item";
            project.dataset.listId=list.id;
            project.innerText=list.name;
            projects.appendChild(project)
        })
}

function clearList(list)
{
    while(list.firstChild)
    {
        list.removeChild(list.firstChild);
    }
}

renderP();