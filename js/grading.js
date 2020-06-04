function gradingStudents(grades) {
    const roundUpGrades = grades.map((grade) => {
        if (grade >= 38) {
            if (grade % 5 > 2) {
                grade = grade + 5 - Math.ceil(grade % 5);
            }
            grade = grade;
        }
        return grade;
    });

    return roundUpGrades;

}

const myArray = [73, 67, 38, 33];
console.log(gradingStudents(myArray));
