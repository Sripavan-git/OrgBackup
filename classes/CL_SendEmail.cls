public class CL_SendEmail {
    
    public string ToAdd {get;set;}
    public string subject {get;set;}
    public string body {get;set;}
    
    public void sendEmails()
    {
        Messaging.SingleEmailMessage ms = new Messaging.SingleEmailMessage();
        
        List<String> toadd = new List<String>{ToAdd};
        
        ms.setToAddresses(toadd);
        ms.setSubject(subject);
        ms.setHtmlBody(body + ' <p></p>Thanks and Regards <br/><b> Sri Pavan Maddela </b> <br/> Thank You for signing up today');
        
        List<Messaging.Email> mail = new List<Messaging.Email>{ms};
        //Messaging.sendEmail(mail);
    }

}