// Your code here
function createEmployeeRecord([str1, str2,str3, str4],){
    return {
        firstName: str1,
        familyName: str2,
        title: str3,
        payPerHour: str4,
        timeInEvents: [],
        timeOutEvents: []
        
     }

}
let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(createEmployeeRecord){
        return createEmployeeRecords(createEmployeeRecord)
    })
}
