public class UpdateContactDescriptionBatch implements Database.Batchable<sObject> {
    
    public Database.QueryLocator start(Database.BatchableContext bc)
    {
        return Database.getQueryLocator('SELECT FirstName, LastName from Contact');
    }
    
    public void execute(Database.BatchableContext bc, LIst<Contact> contacts)
    {
        List<sObject> toUpdateSobjects = new list<sObject>{};
        for(Contact eachCon : Contacts)
        {
            eachCon.Description = 'this description is updated by a batch class';
            toUpdateSobjects.add(eachCon);
        }
        update toUpdateSobjects;
    }
    
    public void finish(Database.BatchableContext bc)
    {
        system.debug('Completed Processing batch... here we can send a completion email or call an external callout indicating batch is complete');
    }

}