public with sharing class lwc_createcontact {
    
    @AuraEnabled
    public static string createcontact(string fname, string lname, string phone, string email ){
        string msg;
        try {
            Contact newcon = new Contact();
            newcon.FirstName = fname;
            newcon.LastName = lname;
            newcon.Phone = phone;
            newcon.Email = email;
            insert newcon;
            msg = 'contact created successully with id '+newcon.id;
            
        } catch (Exception e) {

            msg= 'contact creation failed due to error '+ e.getMessage();
            
        }

        return msg;
    }
}