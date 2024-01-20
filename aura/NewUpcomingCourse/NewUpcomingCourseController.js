({
	save : function(component, event, helper) {
        
        var title = component.find('name')
        title.set("v.errors",[{message: 'Enter title once again'}]);
	}
})