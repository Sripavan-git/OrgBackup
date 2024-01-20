({
    downloadDocument: function(component, event, helper) {
        var action = component.get("c.downloadDoc");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Handle the success response, e.g., open Visualforce page
                window.open('/apex/WordDocDemoTemplate', '_blank');
            } else {
                // Handle the error
                console.error('Error in generating document');
            }
        });
        $A.enqueueAction(action);
    },
    generateDocument: function(component, event, helper) {
        console.log('Clicked Generate Document');
        var action = component.get("c.generateDoc");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('You have successfully attached the word doc to the Account');
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "Word Document generated successfully.",
                    "type": "success",
                    "duration": 5000
                });
                toastEvent.fire();
            } else {
                // Handle the error
                console.error('Error in generating document');
            }
        });
        $A.enqueueAction(action);
    },
    downloadPDFDocument: function(component, event, helper) {
        window.open('/apex/PDFDemoTemplate', '_blank');
    },
    generatePDFDocument: function(component, event, helper) {
        console.log('Clicked Generate Document');
        var action = component.get("c.generatePDF");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "PDF generated successfully.",
                    "type": "success",
                    "duration": 5000
                });
                toastEvent.fire();
            } else {
                // Handle the error
                console.error('Error in generating document');
            }
        });
        $A.enqueueAction(action);
    },
})