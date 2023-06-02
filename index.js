// Write your solution in this file!
const employee = {
    name: 'Edward',
    streetAddress: '7 pearl'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'Name',
    'Sam'
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

const firedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');

function deleteFromEmployeeByKey(obj, key){
    return {
        ...obj[key],
    }
}

const deletedEmployee = deleteFromEmployeeByKey(firedEmployee, "Sam");

function destructivelyDeleteFromEmployeeByKey(obj, key){
     delete obj[key];

     return obj;
}

deleteFromEmployeeByKey(employee, "name");