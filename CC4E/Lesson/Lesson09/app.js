let car1 = "Honda";
let car2 = "Suzuki";
let car3 = "KIV";
let car100 = "Martin";

//  Xin chào bạn, mời bạn trải nghiệm dòng xe "_"
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car1);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car2);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car3);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car100);

// Array: mảng, danh sách
let cars = ["Honda", "Suzuki", "KIV", "Martin"];

// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[0]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[1]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[2]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[3]);
console.log("Tổng số xe ở trong xưởng là:", cars.length);

/*
    - Mảng xe hơi cars [ ]
    - Mỗi phần tử trong mảng (element) sẽ ngăn cách bởi dấu ,
    - index => Chỉ số của mảng
            => sẽ bắt đầu từ vị trí thứ 0
    - length => chiều dài của mảng
*/

// Cách duyệt một mảng một chiều
// Car đang có chiều dài là 4:
// i < 4 => i bé hơn hoặc bằng 3
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car);
}

const cars2 = ["Mazda", "Audi", "BMW", "Toyota"];
const totalCars = cars.concat(cars2[0], cars2[3]);
console.log("Các loại xe ở trong xưởng là:", totalCars);

//Object
let myCar = {
    type: "mercedez",
    HP: 150,
    price: "100.000$",
    coler: "black"
}
const key = "price";
console.log("Loại xe của tôi là:", myCar.type);
console.log("Mã lực xe của tôi là:", myCar["HP"]);
console.log("Giá xe của tôi là:", myCar[key]);

for (let carKey in myCar) {
    const value = myCar[carKey];
    console.log("Chi tiết về ", carKey, " là: ", value);
}

