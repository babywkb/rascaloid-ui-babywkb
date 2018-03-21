class Task {
    constructor(id, subject, description, estimatedHours, status) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.estimatedHours = estimatedHours;
        this.status = status;
    }

    static create(id, subject, description, estimatedHours, status) {
        return new Task(id, subject, description, estimatedHours, status);
    }

    setSubject(subject) {
        return new Task(this.taskId,subject,this.description,this.estimatedHours, this.status);
    }
    setDescription(description) {
        return new Task(this.taskId,this.subject,description,this.estimatedHours, this.status);
    }
    setEstimatedHours(estimatedHours) {
        return new Task(this.taskId,this.subject,this.description,estimatedHours, this.status);
    }
    setStatus(status) {
        return new Task(this.taskId,this.subject,this.description,this.estimatedHours, status);
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
    setTaskStatus(id, status) {
        return new TaskList(this.list.map(task => {
            if (task.id === id) {
                return task.setStatus(status);
            }
            return task;
        }));
    }
    setTaskDescription(id, description) {
        return new TaskList(this.list.map(task => {
            if (task.id === id) {
                return task.setDescription(description);
            }
            return task;
        }));
    }
}

class Story {
    constructor(id, subject, point, taskList) {
        this.id = id;
        this.subject = subject;
        this.point = point;
        this.taskList = taskList;
    }
    static idGenerator = 0;
    static create(id,subject,point,taskList) {
        return new Story(id, subject, point, taskList);
    }
    setSubject(subject) {
        return new Story(this.storyId, subject, this.point, this.taskList);
    }
    setTaskList(taskList) {
        return new Story(this.id, this.subject, this.point, taskList);
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
    setSubject(id, subject) {
        return new StoryList(this.list.map(story => {
            if (story.id === id) {
                return story.setSubject(subject);
            }
            return story;
        }));
    }
    setTaskList(id, taskList) {
        return new StoryList(this.list.map(story => {
            if (story.id === id) {
                return story.setTaskList(taskList);
            }
            return story;
        }));
    }
}

export {Task,TaskList,Story,StoryList}