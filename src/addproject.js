const projects = document.querySelector('data-lists');

lists = [
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
    lists.foreach(list =>
        {
            const project= document.createElement('li');
            project.classList.add="list-item";
            project.dataset.listId=list.id;
            project.innerText=list.name;
            project.appendChild(project)
        })
}

function clearList(list)
{
    while(list.firstChild)
    {
        list.remove(list.firstChild);
    }
}

renderP();