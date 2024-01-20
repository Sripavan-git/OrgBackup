({
	init : function(component, event, helper) {
        
        component.set("v.coursecols", [
            
            		{ label: 'Account Number', fieldName: 'AccountNumber', type: 'text'},
                      { label: 'Account Fax', fieldName: 'Fax', type: 'text'},
                      { label: 'Account Sic', fieldName: 'Sic', type: 'text'},
                      { label: 'Account Year', fieldName: 'YearStarted', type: 'text'},
                      { label: 'Account Industry', fieldName: 'Industry', type: 'text'}
            
        ]);
        
        var action=component.get("c.getAccounts");
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            
            if(state=='SUCCESS')
            {
                var result = response.getReturnValue();
                component.set("v.courseData",result);
            }
            
            
        });
        
        $A.enqueueAction(action);
        
        
        component.set("v.budgetcols", [
            
            			{label: "First Name", fieldName : "FirstName", type: "text"},
                        {label: "Last Name", fieldName : "LastName", type: "text"},
                        {label: "Phone", fieldName : "Phone", type: "phone"},
                        {label: "Email", fieldName : "Email", type: "email"}
                        
        ]);
        
        var actionc=component.get("c.getContacts");
        
        actionc.setCallback(this,function(response){
            
            var state = response.getState();
            
            if(state=='SUCCESS')
            {
                var result = response.getReturnValue();
                component.set("v.budgetData",result);
            }
            
            
        });
        
        $A.enqueueAction(actionc);
        
		
	},
    
    
    newCourse : function(component, event, helper) {
        
        component.set("v.showNewCourse",true);
		
	}
})