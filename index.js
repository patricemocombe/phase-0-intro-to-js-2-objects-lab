const employee = {
    name: "Malcolm",
    streetAddress: "123 Alphabet Street",
};

function updateEmployeeWithKeyAndValue(){
    const employee2 = {
        name: "Sam",
        streetAddress: "11 Broadway",
    };
    return employee2;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee[name] = streetAddress;
    return employee;
};


function deleteFromEmployeeByKey(){
    const employee3 = { 
        employee: "streetAddress",
    };
    return employee3;
};

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
};
