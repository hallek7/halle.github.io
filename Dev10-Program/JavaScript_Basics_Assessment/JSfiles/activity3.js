//Activity 3: JavaScript Arrays and Loops:

//---------------------------------------

//1 . Start off by creating an array with three student names.
const studName = ['John', 'Ashley', 'Ali', ]
    //2 . Create a loop that will prompt the user for three more names.
for (let i = 0; i < studName.length; i++) {
    const student1 = prompt('enter a student name');
    const student2 = prompt('enter a student name');
    const student3 = prompt('enter a student name');
    //3 . After every user input, store the new name into the array
    const newName = [];
    newName.push(student1);
    newName.push(student2);
    newName.push(student3);
    const student = newName[i];
    alert(student);
}
//4 . Create a new loop that will iterate through the array and console log each element of the array.
for (const i = 0; i < newName.length; i++) {
    console.log(i);
}