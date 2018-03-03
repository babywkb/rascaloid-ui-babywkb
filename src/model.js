class Task {
    constructor(id, condition, title, description) {
        this.id = id;
        this.condition = condition;
        this.title = title;
        this.description = description;
    }
    setConditionTodo(condition) {
        return new Task(this.id,condition,this.title,this.description);
    }
    setDescription(description) {
        return new Task(this.id,this.condition,this.title,description);
    }
    static idGenerator = 0;
    static create(title) {
        return new Task(++Task.idGenerator, 'todo', title, '');
    }
}

class Story {

}
