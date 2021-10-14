({
    refresh : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },
    update : function(component, event, helper) {
        console.log(window.location.href);
        if (window && window.location.href.indexOf(component.get('v.recordId')) > -1) {
            $A.get('e.force:refreshView').fire();
        }
    }
})
