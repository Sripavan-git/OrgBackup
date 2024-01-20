public with sharing class returnAllTasks {
    
    @AuraEnabled
    public static list<Task> returnTasks(){
        
        return [select Subject from Task limit 5];
    }
}