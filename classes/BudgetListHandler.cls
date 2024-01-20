public class BudgetListHandler {
    
    @AuraEnabled
    public static List<Budget__c> getallBudgets()
    {
        //List<Budget__c> ng = new List<Budget__c>{};
        list<Budget__c> budgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c];
        return budgets;
    }
    
    @AuraEnabled
    public static List<Budget__c> handleChanges(string selectedkey)
    {
        List<Budget__c> budget = new List<Budget__c>{};
        switch on selectedkey{
            when 'All Budgets'{
                list<Budget__c> allbudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c];
       			budget = allbudgets;
            }
            when 'Upcoming Budgets'{
                list<Budget__c> upcomingBudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Start_Date__c > TODAY];
       			budget = upcomingBudgets;
            }
            when 'Amount'{
                list<Budget__c> AmountBudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Budget_Amount__c > 20];
       			budget = AmountBudgets;
            }
            when 'Closed'{
                list<Budget__c> ClosedBudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where End_Date__c < TODAY];
       			budget = ClosedBudgets;
            }
            
            
        }
        
        return budget;
    }
    
    @AuraEnabled
    public static List<Budget__c> handleSearch(string pick, string input)
    {
        List<Budget__c> totalBud = new list<Budget__c>{};
        switch on pick{
            when 'Status'{
                list<Budget__c> statusBudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Status__c LIKE :input+'%'];
       			totalBud = statusBudgets;
            }       
        }
        return totalBud;
    }
    
    @AuraEnabled
    public static List<Area__c> getAreaPicklist()
    {
        List<Area__c> areas = [select Name from Area__c];
        return areas;
    }
    
	@AuraEnabled
    public static List<Sub_Area__c> getSubAreas()
    {
        List<Sub_Area__c> subareas = [select Name from Sub_Area__c];
        
        return subareas;
    }
    
    @AuraEnabled
    public static List<Budget__c> getBudgetsByArea(string area)
    {
        LIst<Budget__c> areabudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where BudgetArea__r.Name=:area ]; 
        return areabudgets;
    }
    
    @AuraEnabled
    public static list<Budget__c> getBgtByAmount(string key, integer amount)
    {
        List<Budget__c> getAmountbudgets = new List<Budget__c>{};
        switch on key {
            
            when 'Equal to'{
                getAmountbudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Budget_Amount__c =:amount];
                //system.debug(getAmountbudgets);
            }
            when 'Greater Than'{
                getAmountbudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Budget_Amount__c > :amount];
            }
            when 'Smaller Than'{
                getAmountbudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Budget_Amount__c < :amount];
            }
            
        }
        return getAmountbudgets;
    }
    
    @AuraEnabled
    public static list<Budget__c> getBgtAmount2(string key, integer start, integer endd)
    {
        List<Budget__c> getAmountbudgets = new List<Budget__c>{};
        getAmountbudgets = [select Name,Title__c,BudgetArea__r.Name,BudgetSub_Area__r.Name,Start_Date__c,End_Date__c,Budget_Amount__c,Status__c from Budget__c where Budget_Amount__c > :start AND Budget_Amount__c <:endd ];
        return getAmountbudgets;
    }

    }