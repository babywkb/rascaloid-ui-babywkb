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
    static create(title) {
        return new Task(++Task.idGenerator, 'todo', title, '初期詳細内容');
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
    constructor(storyId, title, description, taskList) {
        this.storyId = storyId;
        this.title = title;
        this.description = description;
        this.taskList = taskList;
    }
    static idGenerator = 0;
    static create(title,description,taskList) {
        return new Story(++Story.idGenerator, title, description, taskList);
    }
    setTitle(title) {
        return new Story(this.storyId,title, this.description, this.taskList);
    }
    setDescription(description) {
        return new Story(this.storyId, this.title, description, this.taskList)
    }
    setTaskList(taskList) {
        return new Story(this.id, this.title, this.description, taskList);
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
    setStoryDescription(storyId, description) {
        return new StoryList(this.list.map(story => {
            if (story.storyId === storyId) {
                return story.setDescription(description);
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