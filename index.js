const employee = {
  name: 'Sam' , streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  let employeeIdentity =  Object.assign({},employee, {[key]:value})
      employeeIdentity[key] = value;
      return employeeIdentity;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key ,value){
      employee[key] = value;
      return employee;
  }
  

  function deleteFromEmployeeByKey(employee, key){
    const nameOfEmployee =  Object.assign({}, employee);
    delete nameOfEmployee[key];
    return nameOfEmployee;
  }


  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee);
    delete employee[key];
    return employee;
    }