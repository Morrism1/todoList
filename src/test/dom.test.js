import { editTodo } from '../dom';


test('if it edits the fields', () => {
  const todo = {
    title: 'code',
    description: 'coding',
    ddate: '23/2/2021',
    priority: 'high',
  };

  const index = 2;
  document.body.innerHTML = `
  <div id="myModal" class="modal container">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <span class="ml-5 message"></span>
        <h2 class='modal-title text-center'></h2>
  <input type="hidden" id="todoindex">
  <form class="form" name="form" data-new-task-form>
    <input type="text" id="title" name="title"/>
      <input type="text" id="description"/>
      <input type="date" id="date"/>
   <select name="priority" id="priority" class="form-control">
        <option value="high">High</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
   <button type="submit" class="btn btn-primary submit">Add</button>
  </form>
  </div>
  </div>`;


  const title = document.getElementById('title');

    const description = document.querySelector('#description');
    const ddate = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const todoindex = document.querySelector('#todoindex');

  editTodo(todo, index);
  expect(title.value).toBe('code');
  expect(description.value).toBe('coding');
  expect(ddate.value).not.toEqual('23/2/2021');
  expect(priority.value).toBe('high');
  expect(todoindex.value).toBe("2");
});
