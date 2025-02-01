/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Manoj Anton Manorathan Student ID: 146165238 Date: 01/02/2025
*
********************************************************************************/

const collegeData = require("./Modules/collegeData"); // Import module 

// Initialize the data and test the functions
collegeData.initialize()
    .then(() => {
        console.log("Data initialization successful.");

        // Get all students
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);

        // Get all courses
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Get all TAs
        return collegeData.getTAs();
    })
    .then((tas) => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
    })
    .catch((err) => {
        console.log("Error:", err);
    });