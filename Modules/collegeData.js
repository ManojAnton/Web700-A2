const fs = require("fs"); // Import file system module


class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null; // Store an instance of the Data class

// Function to initialize data from JSON files
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

                // Parse JSON data and store in the Data class
                dataCollection = new Data(JSON.parse(studentData), JSON.parse(courseData));
                resolve(); // Successfully loaded data
            });
        });
    });
}

// Function to get all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get only TAs
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

// Function to get all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned");
        }
    });
}

// Export functions
module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};
