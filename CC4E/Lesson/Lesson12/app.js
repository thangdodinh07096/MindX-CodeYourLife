// const arr1 = [10, 26, 13];
// const arr2 = arr.map((item) => item * 2);
// console.log(arr2);

const studentInput = [
    {
        name: "thang",
        age: 20,
        height: "1.7m",
        math: 9,
        english: 5
    },
    {
        name: "hung",
        age: 15,
        height: "1.5m",
        math: 2,
        english: 6
    },
    {
        name: "hong",
        age: 20,
        height: "1.52m",
        math: 9,
        english: 1
    },
    {
        name: "thu",
        age: 22,
        height: "1.48m",
        math: 9,
        english: 5
    }
]
const gpaStudent = (students) => {
    return students.map((student) => {
        const { name, math, english } = student;
        return {
            name: student.name,
            gpa: (student.math + student.english) / 2
        }
    })
}
console.log("Data dã được xử lý:", gpaStudent(studentInput));

// const arr3 = [1, 2, 3];
// const arr4 = arr3.filter((item) => {
//     return item % 2 === 0;
// })
// console.log(arr4);

const filterFnInput = [1, 8, 7, 5, 55, 54, 455, 10, 26, 87, 99, 88];
const evenNumbers = filterFnInput.filter((num) => num % 2 === 0);
console.log("Các số chẵn là:", evenNumbers);


// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, item) => {
//     // sum item and total, then assign the value back to the total
//     return total + item;
// }, 0);
// console.log(sum);

const scores = [
    { score: 90, subject: "HTML", weight: 0.2 },
    { score: 95, subject: "CSS", weight: 0.3 },
    { score: 85, subject: "JavaScript", weight: 0.5 }
];

//C1:
const getGPA_1 = (scores) => {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i].score * scores[i].weight;
    }
    return total;
}
console.log("C1: Score = ", getGPA_1(scores));

//C2:
const getGPA_2 = (scores) => {
    return scores.reduce((gpa, subject) => {
        return gpa + subject.score * subject.weight;
    }, 0);
};
console.log("C2: Score = ", getGPA_2(scores));