const fs = require("fs"); // Import file system module

// Define the Data class for structured data storage
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null; // Placeholder for the Data instance

// Function to initialize and load data from JSON files
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile("./data/students.json", "utf8", (err, studentData) => {
            if (err) {
                reject("Unable to read students.json");
                return;
            }

            fs.readFile("./data/courses.json", "utf8", (err, courseData) => {
                if (err) {
                    reject("Unable to read courses.json");
                    return;
                }

                // Parse and store data in the Data class instance
                dataCollection = new Data(JSON.parse(studentData), JSON.parse(courseData));
                resolve();
            });
        });
    });
}

// Function to retrieve all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results returned");
        }
    });
}

// Function to retrieve only Teaching Assistants (TAs)
function getTAs() {
    return new Promise((resolve, reject) => {
        let tas = dataCollection.students.filter(student => student.TA === true);
        if (tas.length > 0) {
            resolve(tas);
        } else {
            reject("No results returned");
        }
    });
}

// Function to retrieve all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned");
        }
    });
}

// Export functions for external usage
module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};
