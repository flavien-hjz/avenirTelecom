import { LightningElement,api,wire } from 'lwc';
import findOpportunityByAccountId from '@salesforce/apex/OpportunityController.findOpportunityByAccountId';

export default class OpportunityList extends LightningElement {
  @api recordId;
  @wire(findOpportunityByAccountId,{recId:'$recordId'}) opportunities;
  cols = [
    {label: 'Name', fieldName: 'Name', type:'text'},
    {label: 'Stage', fieldName: 'StageName', type:'text'},
    {label: 'Amount', fieldName: 'Amount', type:'currency'},
    {label: 'Close Date', fieldName: 'CloseDate', type:'date'},
  ]
}