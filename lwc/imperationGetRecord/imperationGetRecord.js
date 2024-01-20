import { LightningElement,wire, api} from 'lwc';
import NAME from '@salesforce/schema/Opportunity.Name'

import STAGE from '@salesforce/schema/Opportunity.StageName'

import AMOUNT from '@salesforce/schema/Opportunity.Amount'

import PROBABILITY from '@salesforce/schema/Opportunity.Probability'

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class ImperationGetRecord extends LightningElement {

    recordId = '0065j00001Hq5C9AAJ';

    @wire(getRecord, {recordId: '$recordId', fields: [NAME, STAGE, AMOUNT, PROBABILITY]}) oppdata;

    get oppname()
    {
        return getFieldValue(this.oppdata.data.NAME);
    }

    get oppstage()
    {
        return getFieldValue(this.oppdata.data.STAGE);
    }
    get oppamount()
    {
        return getFieldValue(this.oppdata.data.AMOUNT);
    }
    get oppprob()
    {
        return getFieldValue(this.oppdata.data.PROBABILITY);
    }


}