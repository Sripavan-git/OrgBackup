public class TaskTrackHandler {
    
    @AuraEnabled
    public static string insertTasks(TaskTrack__c tsk)
    {
        string msg;
        try
        {
            if(tsk.Due_Date__c > System.today())
            {
                insert tsk;
            	msg = 'Task Created successfully with task id '+tsk.id;
            }
            else
            {
                msg = 'Due Date of the task cannot be in the past, Please try again';
            }
            
        }
        catch(Exception e)
        {
            msg = 'There is a problem creating the task '+e.getMessage();
        }
        
        return msg;
        
    }
    
    
    public static void validateTaskStatus(List<TaskTrack__c> tasks)
    {
        for(TaskTrack__c t : tasks)
        {
            if(t.Status__c == 'Completed')
            {
                t.Status__c.addError('Tasks which are of status Completed cannot be deleted');
            }
        }
    }

}