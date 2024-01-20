import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {

    taskName = ''
    getTaskName(event)
    {
        this.taskName = event.target.value;
    }

    

    @track
    taskList = [];

    addTask(event)
    {
        this.taskList.push({
            id : this.taskList.length + 1,
            name : this.taskName
        });
        this.taskName = ''
    }





}