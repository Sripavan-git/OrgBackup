({
	save : function(component, event, helper) {
        
        var task = component.get("v.task");
        
        var action = component.get("c.insertTasks");
        
        action.setParams({'tsk':task});
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            if(state=='SUCCESS')
            {
                var result = response.getReturnValue();
                alert(result);
            }
        });
        
        $A.enqueueAction(action);	
        
        	
	},
    
    clear : function(component, event, helper) {
        
        component.set("v.task.Name",null);
        component.set("v.task.Due_Date__c",null);
        component.set("v.task.Status__c",null);
        component.set("v.task.Description__c",null);
		
	}
})