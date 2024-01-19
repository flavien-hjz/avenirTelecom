public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> findOpportunityByAccountId(String recId) {
        List<Opportunity> opptList = [ 
            SELECT Id, Name, StageName, Amount, CloseDate, AccountId
            FROM Opportunity
            WHERE AccountId=: recId
        ];
        return opptList;
    }
}