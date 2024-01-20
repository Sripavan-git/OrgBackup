trigger TR_Con_FNVal_SendEmail on Contact (before insert,after insert) 
{
    List<Contact> conlist = Trigger.new;
    
    if(trigger.IsInsert==trigger.IsBefore)
    {
        
        for(Contact ct : conlist)
        {
            if(ct.FirstName.length()<3)
            {
                ct.FirstName.addError('FirstName cannot be less than 3 Characters');
            }
        }
    }
    
    if(trigger.IsAfter==trigger.IsInsert)
    {
        for(Contact c: conlist)
        {
            CL_SendEmail cc = new CL_SendEmail();
            cc.ToAdd = c.Email;
            cc.subject = 'Hello '+c.FirstName + ' Welcome to Salesforce, Explore ahead';
            cc.body = 'This is an Triggered Email';
            //cc.sendEmails();
        }
    }

}