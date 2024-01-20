public with sharing class ReturnAllAccounts {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAcc()
    {
        return [select Id,Name,Industry,Rating from Account];
    }
}