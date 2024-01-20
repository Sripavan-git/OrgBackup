public with sharing class searchAccounts {
    
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(string searchKey){

        string skey = '%' + searchKey + '%';
        return [select Name,Phone,Industry from Account where Name like :skey];
        
    }
}