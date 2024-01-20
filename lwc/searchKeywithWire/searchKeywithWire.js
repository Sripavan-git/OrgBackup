import { LightningElement, wire} from 'lwc';
import accounts from '@salesforce/apex/searchallaccounts.getallaccounts'

const cols = [
    {label : 'Account Name',fieldName: 'Name', type: 'String'},
    {label : 'Account Phone', fieldName : 'Phone', type: 'String'},
    {label : 'Account Rating', fieldName : 'Rating', type: 'String'},
    {label : 'Account Industry', fieldName : 'Industry', type: 'String'}
]
export default class SearchKeywithWire extends LightningElement 
{
    accountcols = cols;
    searchkey;
    searchkey2;

    mydata;
    myerror; 

    captureInput(event)
    {
        this.searchkey = event.target.value;

    }

    Search(event)
    {
        this.searchkey2 = this.searchkey;

    }
    
    // wire a property
    @wire(accounts,{searchkey : '$searchkey2'}) accounts;

    // wire a function
    @wire(accounts,{searchkey : '$searchkey2'}) function ({data,error}) {

        if(data)
        {
            this.mydata=data;
        }
        else{
            this.myerror = error;
        }
        
    }



}