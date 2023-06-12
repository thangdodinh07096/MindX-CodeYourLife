/*------------------------------------------------------
    Bài 1
    Viết 1 function kiểm tra xem tháng đó có bao nhiêu ngày
    Biết rằng:
        Input: month, year
        Output: số ngày của tháng
    Nếu tháng không hợp lệ: trả về giá trị là -1
*/
function dayOfMonth(month, year) {
    if (month > 12 || month < 1) {
        return -1;
    }
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return 29;
        } else return 28;
    }
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return 31;
    }
    else return 30;
};

console.log("Bài 1:", dayOfMonth(2, 1800))

/* ------------------------------------------------------
    Bài 2
    Viết một function để tìm số lớn trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị lớn nhất của mảng
*/
function findMax(arr = []) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
console.log("Bài 2:", findMax([1, 54, 11, 51, 5, 54, 5, 4, 51, 11, 1, 55]));

/* ------------------------------------------------------
    Bài 3
    Viết một function để tìm số nhỏ trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị nhỏ nhất của mảng
*/
function findMin(arr = []) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
console.log("Bài 3:", findMin([1, 54, 11, 51, 5, 54, 5, 4, 51, 11, 1, 55, -5]));

/* ------------------------------------------------------
    Bài 4
    Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
    Input: 
        + array: mảng cần chèn
        + position: vị trí chèn
        + value: giá trị chèn
    Output: mảng mới với giá trị đã được chèn vào
*/
function insert(arr = [], pos, value) {
    let firstArr = arr.slice(0, pos);
    let lastArr = arr.slice(pos, arr.length);

    return [...firstArr, value, ...lastArr];
};
console.log("Bài 4:", insert([1, -53, 46, 28, 7], 2, 100));

// Bài 5
/* ------------------------------------------------------
    Viết một hàm, kết quả trả về là một mảng 
    bao gồm các phần tử khác biệt từ 2 mảng cho trước
*/
function findIndex(arr, findObj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findObj) return i;
    }

    return -1;
};

function difference(arr1, arr2) {
    let result = arr1;
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if (findIndex(arr1, element) === -1) {
            result.push(element);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if (findIndex(arr2, element) === -1) {
            result.push(element);
        }
    }
    return result;
}
console.log("Bài 5:", difference([1, 2, 3], [100, 2, 1, 10]));

// Bài 6
/* ------------------------------------------------------
*/
const employees = [
    {
        name: "John",
        age: 21,
        budget: 23000
    },
    {
        name: "Alice",
        age: 19,
        budget: 12000
    },
    {
        name: "John",
        age: 33,
        budget: 50000
    }
]

function getTotalSalary(employees = []) {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        const [salary] = employees[i].budget;
        total += salary;

    }
    return console.log(salary);
}
getTotalSalary(employees);