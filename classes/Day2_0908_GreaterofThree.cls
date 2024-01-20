public class Day2_0908_GreaterofThree {
    
    integer num1 = 888;
    integer num2 = 889;
    integer num3 = 890;
    
    string ch = 'Smaller';
    
    public void main()
    {
        if(ch=='Greater' || ch=='Great')
        {
            isGreat();
        }
        else if(ch=='Smaller' || ch=='Small')
        {
            isSmall();
        }
        else
        {
            system.debug('invalid option! choose from the two');
        }
    }
    
    public void isGreat()
    {

        if(num1 > num2 &&  num1 > num3)
        {
            system.debug(num1+' is greater than '+ num2 +' and '+num3);
        }
        else if(num2 > num1 && num2 > num3)
        {
            system.debug(num2+ ' is greater than '+ num1 + ' and '+num3);
        }
        else
        {
            system.debug(num3+ ' is greater than '+ num1 + ' and '+ num2);
        }
        
    }
    
    public void isSmall()
    {
        
        if(num1 < num2 &&  num1 < num3)
        {
            system.debug(num1+' is smaller than '+ num2 +' and '+num3);
        }
        else if(num2 < num1 && num2 < num3)
        {
            system.debug(num2+ ' is smaller than '+ num1 + ' and '+num3);
        }
        else
        {
            system.debug(num3+ ' is smaller than '+ num1 + ' and '+ num2);
        }
        
    }

}