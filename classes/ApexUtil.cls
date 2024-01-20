public class ApexUtil {
    
    public static Set<String> getSObjectFields(String sObjectName) {

        // * Initializing fieldNames set
        Set<String> fieldNames = new Set<String>();

        // * Getting metadata of all sObjects
        Map<String, Schema.SObjectType> sObjectMap = Schema.getGlobalDescribe();

        // * Getting the reference to current sObject
        Schema.SObjectType sObjectTypeInstance = sObjectMap.get(sObjectName);

        if(sObjectTypeInstance!=null) {

            // * Getting Fields for current sObject
            Map<String, Schema.SObjectField> fieldMap = sObjectTypeInstance.getDescribe().fields.getMap();

            for(Schema.SObjectField field: fieldMap.values()) {
                Schema.DescribeFieldResult fieldResult = field.getDescribe();
                if(fieldResult.isAccessible()) {
                    fieldNames.add(fieldResult.getName());
                }
            }
        }
        return fieldNames;
    }
    
    public static string getSOQL(string objectName)
    {
        
        set<string> fieldNames = getSObjectFields(objectName);
        
        string query = 'SELECT ';
        for(string field : fieldNames)
        {
            query+= field + ',';
        }
        
        query = query.substring(0,query.lastIndexof(','));
        query += ' FROM ' + objectName;
        
        return query;
        
    }
}