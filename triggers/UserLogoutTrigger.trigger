trigger UserLogoutTrigger on User (after update) {
    List<University_Duplicates_Detail__c> logoutLogs = new List<University_Duplicates_Detail__c>();

    for (User updatedUser : Trigger.new) {
        User oldUser = Trigger.oldMap.get(updatedUser.Id);

        if (oldUser != null) {
            University_Duplicates_Detail__c logoutLog = new University_Duplicates_Detail__c();
            logoutLog.Comments__c = updatedUser.Id;
            logoutLog.Name = System.now().format('MM/dd/YYYY');
            // Add other relevant fields
            logoutLogs.add(logoutLog);
        }
    }

    // Insert logout logs
    if (!logoutLogs.isEmpty()) {
        insert logoutLogs;
    }
}