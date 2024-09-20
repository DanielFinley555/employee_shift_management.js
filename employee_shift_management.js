//Task 1: Create an Employees Array of Employee Objects

employees = [
    { name: 'Walter', shifts: [{ day: 'Wednesday', hours: 5 }, { day: 'Friday', hours: 10 }] },
    { name: 'Steve', shifts: [{ day: 'Monday', hours: 6 }, { day: 'Thursday', hours: 8 }] },
    { name: 'Jim', shifts: [{ day: 'Tuesday', hours: 7 }, { day: 'Thursday', hours: 6 }] },
    { name: 'Devin', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Tuesday', hours: 7 }] },
    { name: 'Gale', shifts: [{ day: 'Wednesday', hours: 9 }, { day: 'Friday', hours: 4 }] },
    { name: 'Khalil', shifts: [{ day: 'Saturday', hours: 10 }] }
];



//Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(i) {
    //Finding the individual employee names
    console.log(`Employee: ${i.name}`)
    //Looking into the shifts array to find the day's nd hours's for each employee
    i.shifts.forEach(i => {
        console.log(`Day: ${i.day}`)
        console.log(`Hours: ${i.hours}`)
    })
};

employees.forEach(displayEmployeeShifts);



//Task 3: Create a Function to Assign a New Shift

function assignShift(i) {
    //finding the employee
    const found = employees.find((shifts,day) => shifts,day = i);

    console.log(found)

    found ? `${i} will be added to ${name} shifts` : `error ${name} allready has shift`
};

//assigning monday shift to Jim
assignShift(Jim,Monday)
