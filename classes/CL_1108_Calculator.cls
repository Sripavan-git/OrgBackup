public virtual class CL_1108_Calculator {
    
    public integer num1 {get;set;}
    public integer num2 {get;set;}
    public string ch {get;set;}
    public decimal result {get;set;}
    
    public void logic()
    {
        if(ch=='A')
        {
            add();
        }
        else if(ch=='B')
        {
            sub();
        }
        
        else if(ch=='C')
        {
            mul();
        }
        else if(ch=='D')
        {
            div();
        }
        else
        {
            system.debug('No other option choose from the above');
        }
        
    }
    
    
    void add()
    {
        result = num1+num2;
    }
    void sub()
    {
        result = num1 - num2;
    }
    
    void mul()
    {
        result = num1*num2;
    }
    void div()
    {
        result = num1 / num2;
    }
    
    

}