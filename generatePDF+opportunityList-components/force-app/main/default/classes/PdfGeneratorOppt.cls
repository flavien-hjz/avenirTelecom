public with sharing class PdfGeneratorOppt {
    @AuraEnabled
    public static List<Opportunity> getOpportunitiesController() {
        return [SELECT Id, AccountId, Name, Amount, CloseDate FROM Opportunity];
    }
}