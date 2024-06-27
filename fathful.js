const prompt = require('prompt-sync')();

// Function to get user input and create a new student record
function getStudentRecord() {
  let name = prompt("Input student name---> ");
  let phoneNumber = prompt("Input the student phone number---> ");
  let emailAddress = prompt("Input the student email address---> ");
  let nextofKin = prompt("Input the student next of kin---> ");
  let homeAddress = prompt("Input the student home address---> ");

  // Validate user input
  if (!validatePhoneNumber(phoneNumber)) {
    console.error("Invalid phone number. Please try again.");
    return getStudentRecord();
  }

  if (!validateEmailAddress(emailAddress)) {
    console.error("Invalid email address. Please try again.");
    return getStudentRecord();
  }

  return {
    name,
    phoneNumber,
    emailAddress,
    nextofKin,
    homeAddress,
  };
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
  return true; 
}

// Function to validate email address
function validateEmailAddress(emailAddress) {
  return true; 
}

// Function to display student records
function displayStudentRecords(studentRecords) {
  for (let i = 0; i < studentRecords.length; i++) {
    let student = studentRecords[i];
    console.log(Name: ${student.name});
    console.log(Phone Number: ${student.phoneNumber});
    console.log(Email Address: ${student.emailAddress});
    console.log(Next of Kin: ${student.nextofKin});
    console.log(Home Address: ${student.homeAddress});
  }
}

// Main function
function main() {
  let studentRecords = [];

  while (true) {
    let response = prompt("Do you want to add a new student record? (yes/no)");
    if (response.toLowerCase() === "yes") {
      let newStudentRecord = getStudentRecord();
      studentRecords.push(newStudentRecord);
    } else if (response.toLowerCase() === "no") {
      break;
    } else {
      console.error("Invalid input. Please try again.");
    }
  }

  displayStudentRecords(studentRecords);
}

// Calling the main function
main();