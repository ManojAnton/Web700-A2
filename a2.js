/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Manoj Anton Manorathan Student ID: 146165238 Date:01/02/2025
*
********************************************************************************/

const collegeData = require("./modules/collegeData"); // Import data module

// Initialize the data and execute retrieval functions sequentially
collegeData.initialize()
    .then(() => {
        console.log("Data initialization successful.");

        // Retrieve and log all students
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);

        // Retrieve and log all courses
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Retrieve and log all TAs
        return collegeData.getTAs();
    })
    .then((tas) => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
