type EmploymentStatus = "employed" | "unemployed" | "student" | (string & {});

function updateEmploymentStatus(status: EmploymentStatus) {
    return `Employment status updated: ${status}`;
}

console.log(updateEmploymentStatus("employed"));
console.log(updateEmploymentStatus("unemployed"));
console.log(updateEmploymentStatus("student"));
console.log(updateEmploymentStatus("underemployed"));
