import { LightningElement, track } from 'lwc';

export default class Notesapp extends LightningElement {

    myVal = '';
    taskName = '';
    taskDetail = '';
    addTaskCmp = false;
    isSaveDisabled = true;
    @track tasksList = [];
    addTask(event)
    {
        console.log('add task is clicked');
        this.addTaskCmp = true;

    }

    ChangeHandler(event)
    {
        let name = event.target.name;
        
        if(name === 'taskName')
        {
            this.taskName = event.target.value;
            if(this.taskName.length > 0){
                this.isSaveDisabled = false;
            }
            else if (this.taskName.length === 0){
                this.isSaveDisabled = true;
            }
        }
        else if(name ==='taskDetail')
        {
            this.taskDetail = event.target.value;
        }
    }

    closeAddtask(event)
    {
        this.addTaskCmp = false;
    }

    saveTask(event)
    {
        this.addTaskCmp = false;
        this.tasksList.push({
            id: this.tasksList.length+1,
            TaskName : this.taskName,
            TaskDetail : this.taskDetail,
        });
        this.isSaveDisabled = true;
    }

}