const AddTask = require('../addtodo');

test('if title is correct', () => {
  const newTask = new AddTask('Read', 'reading', '24/3/2021', 'high');
  expect(newTask.title).toBe('Read');
});

test('if description is set correctly', () => {
  const newTask = new AddTask('Read', 'reading', '24/3/2021', 'high');
  expect(newTask.description).toBe('reading');
});
test('if date is set correctly', () => {
  const newTask = new AddTask('Read', 'reading', '24/3/2021', 'high');
  expect(newTask.date).not.toBe('24/3/2021');
});
test('if priority is set correctly', () => {
  const newTask = new AddTask('Read', 'reading', '24/3/2021', 'high');
  expect(newTask.priority).toBe('high');
});
