const employees = [];

function Employee (name, jobtitle, salary, status = "Full Time") {
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Job Title: ${jobtitle}, Salary: ${salary}/yearly, Status: ${status}`);
    
    }
    
    employees.push(this);
}

const employee1 = new Employee("Jim", "Developer", 150000,);
const employee2 = new Employee("Karen", "Admin Assistant", 55000, "Part Time");
const employee3 = new Employee("Rocky", "Manager", 98000);

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();
console.log(employees);
