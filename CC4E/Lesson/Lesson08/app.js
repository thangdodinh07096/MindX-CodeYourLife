{
    // let, const chỉ sử dụng được trong scoped
}

if (true) {
    // statement true
} else {
    // statement false
}

age = 18;
if (age <= 18) {
    console.log("Boy");
} else {
    console.log("Man");
}

// if ... else if ... else
let i = 17;
if (i > 0 && i <= 10) {
    console.log("Xỉu");
} else if (i >= 11 && i <= 23) {
    // 11 <= i <= 23
    console.log("Tài");
} else {
    console.log("Wattt?");
}

// switch

switch (1) {
    case 1:
    case 2:

    default:
        break;
}

//

let a = 10;
let b = 15;

if (a > b) {
    console.log("A greater than B");
}
console.log(1 + 3444 + "1" + 9888888);
console.log("1" + 9888888 + 1111111111 + true);

console.log(typeof parseFloat("2.45"));

if (11 == "1" + 1) {
    console.log("hello  11");
}

// loop

let x = 13;
for (let step = 0; step <= x; step = step + 1) {
    // xn;
    // 3n = 3+3+...+n
    //
    if (step != 1 && step != x && x % step === 0) {
        console.log("khong phai so nguyen");
    }
}

if ("") {
    console.log("hello");
}

let c = 1;
let v = -1;

if (typeof c === "number" && typeof v === "number") {
    console.log("good job !");
}

if (c > v) {
    console.log("good job !");
}

if (c != v) {
    console.log("good job !");
}