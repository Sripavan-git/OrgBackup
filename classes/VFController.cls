public class VFController {
    public String AccountName {
        get;
        set;
    }
    
    public VFController() {
        AccountName = Apexpages.CurrentPage().getParameters().get('companyName');
    }
}