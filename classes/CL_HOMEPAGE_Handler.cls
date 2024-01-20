public with sharing class CL_HOMEPAGE_Handler 
{
    @AuraEnabled
    public static List<Account> getAccounts()
    {
        LIst<Account> accounts = [select Name,AccountNumber,Fax,Sic,YearStarted,Industry from Account limit 3];
        
        return accounts;
    }
    
    @AuraEnabled
    public static LIst<Contact> getContacts()
    {
        List<Contact> cons = [select FirstName, LastName, Phone, Email from Contact limit 3];
        
        return cons;
    }

}