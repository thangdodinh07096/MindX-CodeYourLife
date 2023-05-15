/*
Đề bài 1:
Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). Hiển thị tổng các số nguyên tố trong khoảng a và b. Tạo giao diện nhập 2 số và in kết quả trên giao diện web
*/

function isprime(n) {
    let flag = 1;
    if (n < 2) return flag = 0;
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}

let a = +prompt("Interet a: ");
let b = +prompt("Interet b: ");
let arr = [];
let result = [];
let total = 0;

if (a >= b) {
    document.writeln("Bài 1: a phải nhỏ hơn b.");
} else {
    for (let i = a; i < b + 1; i++) {
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (isprime(arr[i]) == 1) result.push(arr[i]);
    }
    for (let i = 0; i < result.length; i++) {
        total += result[i];
    }
    document.writeln(`Bài 1: Tổng các số nguyên tố trong khoảng từ ${a} - ${b} là: ${total} .`);
}
document.writeln("<br/>");



/*
Đề bài 2:
Viết một function có tên numberOneTriangle(). Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác
*/

function numberOneTriangle(n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            document.writeln(" * ")
        }
        document.writeln("<br/>")
    }
}
const n = prompt('Nhập giá trị n: ');
if (!Number.isInteger(n) && 1 <= n && n <= 10) {
    document.writeln("Bài 2: ")
    document.writeln("<br/>")
    numberOneTriangle(n);
} else {
    document.writeln("Bài 2: số n không trong khoảng từ 1 - 10")
}
