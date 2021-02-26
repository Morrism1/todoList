class AddTask {
  constructor(title, description, ddate, priority) {
    this.title = title;
    this.description = description;
    this.ddate = ddate;
    this.priority = priority;
    this.id = Date.now().toString();
  }
}

export default AddTask;