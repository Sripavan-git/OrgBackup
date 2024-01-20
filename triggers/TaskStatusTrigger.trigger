trigger TaskStatusTrigger on TaskTrack__c (before delete) {
    
    
    if(trigger.isDelete == trigger.isBefore)
    {
        TaskTrackHandler.validateTaskStatus(trigger.old);
    }

}