import createProject from '../addproject';

test('if title is correct', () => {
  const newProject = createProject('project1');
  expect(newProject.name).toBe('project1');
});

test('if title is correct', () => {
  const newProject = createProject('project1');
  expect(newProject.tasks).toStrictEqual([]);
});
