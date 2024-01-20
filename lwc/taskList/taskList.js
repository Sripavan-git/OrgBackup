import { LightningElement, track, wire } from 'lwc';
import getTasks from '@salesforce/apex/returnAllTasks.returnTasks'

export default class TaskList extends LightningElement {

    connectedCallback()
    {
        this.getTasks();
    }

    taskName ="";

    @track
    taskList = [];
    error;

    addTask(event)
    {
        this.taskName = event.target.value;
    }

    addTaskItem(event)
    {
        // --> push adds array object to the end of the array and can be seen last of the array
        // --> unshift adds array object to the beginning of the array and can be seen in the beginning
        this.taskList.unshift({
            id: this.taskList.length + 1,
            name: this.taskName
        })
        this.taskName= ''
        // console.log('the task list is '+JSON.stringify(this.taskList))
    }

    @wire(getTasks) getdata;

    getTasks(event)
    {
        let data = this.getdata.data;
        console.log('data is '+ data);
    }
    

    /*
    removeTask(event)
    {
        let tasktoRemove = event.target.name;
        let tasklist = this.taskList;
        let taskId;

        tasklist.splice(tasklist.findIndex(function(ele){
            return tasktoRemove === ele.id;
        }),1);

    }*/



}