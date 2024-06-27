
let studentRecords = [
    {
      name: "Ajayi Oluwapelumi",
      matriculationNumber: "AUL/CMP/22/013",
      department: "Computing",
      homeAddress: "Sululere Quaters, ile-ife, Osun state",
      emailAddress: "ajayioluwapelumi920@gmail.com"
    },
  ];
  
  // Function created to display the student records
  function displayStudentRecords() 
  {
    for (let i = 0; i < studentRecords.length; i++) 
    {
      let student = studentRecords[i];
      console.log(`Name: ${student.name}`);
      console.log(`Matriculation Number: ${student.matriculationNumber}`);
      console.log(`Department: ${student.department}`);
      console.log(`Home Address: ${student.homeAddress}`);
      console.log(`Email Address: ${student.emailAddress}`);
    }

  }
  
  // Calling the function to display student records inputed earlier
  displayStudentRecords();