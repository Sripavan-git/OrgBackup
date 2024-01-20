trigger LogoutEventTrigger on LogoutEventStream (after insert) { 
    List<University_Duplicates_Detail__c> eventList = new List<University_Duplicates_Detail__c>();
    For(LogoutEventStream event : Trigger.new){
        University_Duplicates_Detail__c record = new University_Duplicates_Detail__c();
       
        record.Name = event.Username;
        record.Comments__c = event.EventDate.format();
        
        eventList.add(record);
    }
    insert eventList;
}