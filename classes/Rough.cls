public class Rough {
    
    public string sum;
    public integer num;
    
    public Rough()
    {
        
        system.debug('This is first Constructor');
        
    }
    
    public Rough(string s)
    {
        this.sum=s;
        system.debug('this is string constructor');
        
        
    }
    
    public Rough(integer a)
    {
        this.num = a;
        system.debug('this is int constructor');
        
    }
    

}