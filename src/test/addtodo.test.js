import AddTask from '../addtodo';

const newTask = new AddTask('Read', 'reading', '24/3/2021', 'high');

test('if title is correct', () => {
  expect(newTask.title).toBe('Read');
});

test('if description is set correctly', () => {
  expect(newTask.description).toBe('reading');
});
test('if date is set correctly', () => {
  expect(newTask.date).not.toBe('24/3/2021');
});
test('if priority is set correctly', () => {
  expect(newTask.priority).toBe('high');
});
