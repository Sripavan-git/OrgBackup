({
	initfunc : function(component, event, helper) {
        
        component.set("v.budgetcols", [
            
            		  { label: 'Budget Id', fieldName: 'Name', type: 'text'},
                      { label: 'Title', fieldName: 'Title__c', type: 'text'},
                      { label: 'Area', fieldName: 'BudgetArea__c', type: 'text'},
                      { label: 'Sub Area', fieldName: 'BudgetSub_Area__c', type: 'text'},
                      { label: 'Start Date', fieldName: 'Start_Date__c', type: 'text'},
            		  { label: 'End Date', fieldName: 'End_Date__c', type: 'text'},
            		  { label: 'Approved Budget', fieldName: 'Budget_Amount__c', type: 'text'},
                      { label: 'Status', fieldName: 'Status__c'},
                      { label: 'Balance Amount', fieldName: '', type: 'text'}
                      
            
        ]);
        
        
        var action = component.get("c.getallBudgets");
        
        action.setCallback(this,function(response){
            
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var allbudgets = response.getReturnValue();
                var formattedData = allbudgets.map(function(row) {
                    return {
                        Name : row.Name,
                        Title__c : row.Title__c,
                        BudgetArea__c: row.BudgetArea__r.Name,
                        BudgetSub_Area__c : row.BudgetSub_Area__r.Name,
                        Start_Date__c : row.Start_Date__c,
                        End_Date__c : row.End_Date__c,
                        Budget_Amount__c : row.Budget_Amount__c,
                        Status__c : row.Status__c
                    };
                });
                
                component.set("v.budget",formattedData);
            }
            
        });
        
        $A.enqueueAction(action);
		
	},
    
    // Handles the dropdown 
    handleChange : function(component, event, helper){
        
        var selectedValue = component.find("budgetlist").get("v.value");
        
        if(selectedValue=='Status')
        {
            component.set("v.showStatusSearch",true);
            component.set("v.showPcklst1",false);
            component.set("v.showAmountList",false);
            component.set("v.showAmountInput",false);
            component.set("v.showAmountInput2",false);
        }
        
        if(selectedValue == 'Area')
        {
			component.set("v.showStatusSearch",false);
            component.set("v.showPcklst1",true);
            component.set("v.showAmountList",false);
            component.set("v.showAmountInput",false);
            component.set("v.showAmountInput2",false);

            var areaaction = component.get("c.getAreaPicklist");
            areaaction.setCallback(this,function(response){
                var state = response.getState();
                if(state=="SUCCESS")
                {
                    var result = response.getReturnValue();
                    var ls = [];
                    var formattedData = result.map(function(row) {
                        ls.push(row.Name);
                	});
                    component.set("v.AreaRecords",ls);
                }
                
            });
            $A.enqueueAction(areaaction);
        }
        
        if(selectedValue == "Amount")
        {
            component.set("v.showAmountList",true);
            component.set("v.showStatusSearch",false);
            component.set("v.showPcklst1",false);
        }
        
        
        if (selectedValue == "All Budgets" || selectedValue == "Upcoming Budgets" || selectedValue == "Closed" || selectedValue =="User")
        {
         	component.set("v.showStatusSearch",false);
            component.set("v.showPcklst1",false);
            component.set("v.showAmountList",false);
            component.set("v.showAmountInput",false);
            component.set("v.showAmountInput2",false);
            var action = component.get("c.handleChanges");
        
            action.setParams({"selectedkey" : selectedValue});
            
            action.setCallback(this,function(response){
                
                var state = response.getState();
                if(state=="SUCCESS")
                {
                    var result = response.getReturnValue();
                    component.set("v.budget",result);
                }
            });
            
            $A.enqueueAction(action);
        }
        
    },
    
    // handles the dropdown with Status input field
    statusinput : function(component, event, helper){
        var inp = component.find('inp').get("v.value");
        var action = component.get("c.handleSearch");
        
        action.setParams({"pick" : "Status", "input" : inp});
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            if(state=="SUCCESS")
            {
                var result = response.getReturnValue();
                component.set("v.budget",result);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    // Area dropdown select method
    OnAreaSelect : function(component, event, helper){
        
        var area = component.find("arealist").get("v.value");
        var action = component.get("c.getBudgetsByArea");
        action.setParams({"area":area})
        
        action.setCallback(this,function(response){
            
            var state= response.getState();
            if(state=='SUCCESS'){
                var result = response.getReturnValue();
                //alert(result);
                component.set("v.budget",result);
            }
        });
        
        $A.enqueueAction(action);
        
    },
    
    //amount dropdown
    OnAmountSelect : function(component, event, helper){
        
        var amountOption = component.find("amountlist").get("v.value");
        if(amountOption == "Equal to" || amountOption == "Equal to" || amountOption == "Equal to" )
        {
            component.set("v.showAmountInput",true);
            component.set("v.showAmountInput2",false);
        }
        if(amountOption == "Between")
        {
            component.set("v.showAmountInput",true);
            component.set("v.showAmountInput2",true);
        }
        
    },
    
    //amount input selection
    OnAmountInputSelect : function(component, event, helper)
    {
        var amountOption = component.find("amountlist").get("v.value");
        var inp = component.find("amountinp").get("v.value");
        //var inp2 = component.find("amountinp2").get("v.value");
        
        var action = component.get("c.getBgtByAmount");
        action.setParams({"key":amountOption,"amount":inp});
        action.setCallback(this,function(response){
            
            var status = response.getState();
            if(status == 'SUCCESS')
            {
                var result = response.getReturnValue();
                component.set("v.budget",result);
            }
        });
        $A.enqueueAction(action);
        
        //handles amount with between
        if(amountOption == "Between")
        {
            var inp2 = component.find("amountinp2").get("v.value");
            var action = component.get("c.getBgtAmount2");
            action.setParams({"key":amountOption,"start":inp,"endd":inp2});
            action.setCallback(this,function(response){
                
                var status = response.getState();
                if(status == 'SUCCESS')
                {
                    var result = response.getReturnValue();
                    component.set("v.budget",result);
                }
            });
            $A.enqueueAction(action);
            }
    }
    
    
    
})