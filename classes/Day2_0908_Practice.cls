public class Day2_0908_Practice {
    
    public void main()
    {
        
    }
    
    void CalculateAvg()
    {
        integer number1 = 90;
        integer number2 = 90;
        integer number3 = 90;
        decimal res;
        
        res = (number1 + number2 + number3)/3;
        system.debug('the average of the numbers is '+ res);
    }
    
    void CalculateFac()
    {
        
        integer fact = 10;
        integer i=1;
        long result;
        
        while(i>=fact)
        {
            result = result * i;
        }
        
        system.debug('the factorial of the number is '+ result);
        
    }
    
    void checkPrime()
    {
        integer prime = 17;
		boolean flag = true;        
        for(integer i=2;i<math.sqrt(prime);i++)
        {
            if(math.mod(prime, i)==0)
            {
                flag = false;
            }
        }
        if(flag)
        {
            system.debug('the given number '+prime+ ' is a prime number');
        }
    }
    
    
    void reverseString()
    {
        string strg = 'reverse';
		string res = '';        
        integer len = strg.length();
        for(integer i=len-1;i>=0;i--)
        {
            res= res+ strg.charAt(i);
        }
        
        system.debug('the original string is '+strg+' and the reversed string is '+res);
    }
    
    
    void isPalindrome()
    {
        string name = 'lol';
        integer len = name.length();
        boolean flag = true;
        for(integer i=0;i<len;i++)
        {
            for(integer j=len-1;i>=0;i++)
            {
                if(name.charAt(i) != name.charAt(j))
                {
                    flag=false;
                }
            }
        }
        
        if(flag)
        {
            system.debug('the given string '+name+' is a palindrome');
        }
        else
        {
            system.debug('the given string '+name+' is not a palindrome');
        }
        
    }
    
    void printFibonocci()
    {
        integer stop = 10;
        integer n1 =0;
        integer n2 =1;
        integer n3;
        list<Integer> ll = new list<integer>{n1,n2};
        
        for(integer i=2;i<10;i++)
        {
            n3 = n1+n2;
            ll.add(n3);
            n1=n2;
            n2=n3;
        }
        
        system.debug('the fibonocci series is '+ll);
            
    }


}