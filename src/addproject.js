function createProject(name) {
  return {
    id: Date.now().toString(),
    name,
    tasks: [],
  };
}

export default createProject;
