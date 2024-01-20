import { LightningElement } from 'lwc';

export default class GreaterOfThree extends LightningElement {

    num1;
    num2;
    num3;

    firstNum(event)
    {
        this.num1 = event.target.value;
    }
    secNum(event)
    {
        this.num2 = event.target.value;
    }
    thirdNum(event)
    {
        this.num3 = event.target.value;
    }
    Calculate(event)
    {
        let first = parseInt(this.num1);
        let second = parseInt(this.num2);
        let third = parseInt(this.num3);

        //alert(first+''+second+''+third);

        if(first > second && first > third)
        {
            alert(first+'is greater'); 
        }
        else if(second > first && second > third)
        {
            alert(second+'is greater');
        }
        else
        {
            alert(third+'is greater');
        }

    }
}