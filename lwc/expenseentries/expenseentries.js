import { LightningElement, track } from 'lwc';

export default class Expenseentries extends LightningElement {

    date;
    des;
    amount;
    category;
    showdata = false;
    @track expensedata = [];

    handleChange(event)
    {
        const targetName = event.target.name;
        if(targetName === 'datefield'){this.date = event.target.value;}
        if(targetName === 'descfield'){this.des = event.target.value;}
        if(targetName === 'amountfield'){this.amount = event.target.value;}
        if(targetName === 'catfield'){this.category = event.target.value;}
        
    }

    submit(event)
    {
        this.showdata = true;

        this.expensedata.push({
            id: this.expensedata.length + 1,
            date : this.date,
            desc : this.description,
            amt : this.amount,
            cat : this.category
        })
    }
}