public class OfferGenerationController {

    @AuraEnabled
    public static String downloadDoc() {
        //Any validations or conditions if you have
        return 'Download Successful';
    }
        
    @AuraEnabled
    public static String generateDoc() {
        //The templateName is the name of Visualforce Page you created
        String templateName = 'WordDocDemoTemplate';
        PageReference pageRef = new PageReference('/apex/' + templateName);
        pageRef.getParameters().put('companyName', 'Dhruvosoft');
        
        //Id of a sample Account
        Id accId = '0015j00001UTsLfAAL';

        // create the new attachment
        Attachment attach = new Attachment();
        
        // the contents of the attachment from the pageRef
        Blob body;
        try {
            // returns the output of the page
            body = pageRef.getContent();
        } catch (VisualforceException e) {
            body = Blob.valueOf('Error at: ' + e.getLineNumber() + 'Message: ' + e.getMessage());   
        }
        attach.Body = body;
        attach.Name = 'Sample Word Document.doc';
        
        // attach the pdf to the account
        attach.ParentId = accId;
        attach.ContentType = 'application/msword';
        insert attach;
        return 'Success';
    }
    
    @AuraEnabled
    public static String generatePDF() {
        String templateName = 'PDFDemoTemplate';
        PageReference pageRef = new PageReference('/apex/' + templateName);
        
        Id accId = '0015j00001UTsLfAAL';
        
        // Render the page as PDF
        Blob pdfBlob = pageRef.getContentAsPDF();
        
        Attachment attachment = new Attachment();
        attachment.Body = pdfBlob;
        attachment.Name = 'Sample PDF.pdf';
        attachment.ParentId = accId;
        insert attachment;
        return 'Success';
    }
    
}