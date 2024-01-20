public with sharing class searchallaccounts {
    @AuraEnabled(cacheable=true)
    public static list<Account> getallaccounts(string searchkey){
        
        string key = '%' + searchkey + '%';
        return [select Name, Phone, Rating, Industry from Account where Name like :key];
    }
}