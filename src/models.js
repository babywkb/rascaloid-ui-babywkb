class Task {
    constructor(taskId, condition, title, description) {
        this.taskId = taskId;
        this.condition = condition;
        this.title = title;
        this.description = description;
    }
    setCondition(condition) {
        return new Task(this.taskId,condition,this.title,this.description);
    }
    setDescription(description) {
        return new Task(this.taskId,this.condition,this.title,description);
    }
    static idGenerator = 0;
    static create(title,description) {
        return new Task(++Task.idGenerator, 'todo', title, description);
    }
}

class TaskList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new TaskList([]);
    }
    add(task) {
        return new TaskList([task, ...this.list]);
    }
    setTaskCondition(taskId, condition) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === taskId) {
                return task.setCondition(condition);
            }
            return task;
        }));
    }
    setTaskDescription(taskId, description) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === taskId) {
                return task.setDescription(description);
            }
            return task;
        }));
    }
}

class Story {
    constructor(storyId, title, taskList) {
        this.storyId = storyId;
        this.title = title;
        this.taskList = taskList;
    }
    static idGenerator = 0;
    static create(title,taskList) {
        return new Story(++Story.idGenerator, title, taskList);
    }
    setTitle(title) {
        return new Story(this.storyId,title, this.taskList);
    }
    setTaskList(taskList) {
        return new Story(this.id, this.title, taskList);
    }
}

class StoryList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new StoryList([]);
    }
    add(story) {
        return new StoryList([story, ...this.list]);
    }
    setStoryTitle(storyId, title) {
        return new StoryList(this.list.map(story => {
            if (story.storyId === storyId) {
                return story.setTitle(title);
            }
            return story;
        }));
    }
    setStoryTaskList(storyId, taskList) {
        return new StoryList(this.list.map(story => {
            if (story.storyId === storyId) {
                return story.setTaskList(taskList);
            }
            return story;
        }));
    }
}

export {Task,TaskList,Story,StoryList}