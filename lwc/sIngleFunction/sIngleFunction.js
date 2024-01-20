import { LightningElement } from 'lwc';

export default class SIngleFunction extends LightningElement {

    num1;
    num2;
    num3;

    captureData(event){

        const evt = event.target.name;
        if(evt == 'inp1')
        {
            this.num1 = event.target.value;
        }
        else if(evt == 'inp2')
        {
            this.num2 = event.target.value;
        }
        else {
            this.num3 = event.target.value;
        }


    }
    submit(event){

        let n1 = Number(this.num1);
        let n2 = Number(this.num2);
        let n3 = Number(this.num3);

        if(n1>n2 && n1 > n3)
        {
            alert(n1+' is greater');
        }
        else if(n2>n1 && n2 > n3)
        {
            alert(n2+' is greater');
        }
        else {
            alert(n3+' is greater');
        }

    }
}