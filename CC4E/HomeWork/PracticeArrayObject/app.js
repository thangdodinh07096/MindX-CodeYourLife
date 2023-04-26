// let num1 = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
// const result1 = [];
// for (let i = 0; i < num1.length; i++) {
//     let number = num1[i] * num1[i];
//     result1.push(number);
// }
// console.log("Bình phương các số trong mảng num1 là: ", result1);

// // -----------------------------------------------

// let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
// const result2 = [];
// for (let i = 0; i <= num2.length; i++) {
//     let flag = 0;
//     for (let j = 2; j < num2[i]; j++) {
//         if (num2[i] % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (num2[i] > 1 && flag == 0) {
//         result2.push(num2[i]);
//     }
// }
// console.log("------------------------------------");
// console.log("Các số nguyên tố trong mảng num2 là: ", result2);

// // -----------------------------------------------

// let cart = [];

// let fuit1 = {
//     name: "chuối",
//     color: "vàng",
//     price: "10.000đ",
//     madeIn: "Việt Nam",
//     outOfdate: "23/4/2023",
//     distributor: {
//         company: "DODINHTHANG",
//         address: "Hà Nội",
//     },
// };
// let fuit2 = {
//     name: "Cam",
//     color: "Orange",
//     price: "20.000đ",
//     madeIn: "Trung Quốc",
//     outOfdate: "30/2/2023",
//     distributor: {
//         company: "Alibaba",
//         address: "Quảng Châu",
//     },
// };
// let fuit3 = {
//     name: "Táo",
//     color: "Yellow",
//     price: "53.000đ",
//     madeIn: "Mỹ",
//     outOfdate: "21/1/2022",
//     distributor: {
//         company: "Facebook",
//         address: "Mỹ",
//     },
// };
// cart.push(fuit1, fuit2, fuit3);
// for (let i = 0; i < cart.length; i++) {
//     console.log("------------------------------------");
//     console.log("STT: " + (i + 1));
//     console.log("Tên sản phẩm: " + cart[i].name);
//     console.log("Giá: " + cart[i].price);
//     console.log("Ngày hết hạn: " + cart[i].outOfdate);
//     console.log(
//         "Đơn vị phân phối: " +
//         cart[i].distributor.company +
//         " - " +
//         cart[i].distributor.address
//     );


// }
// let id = Number(prompt("Nhập STT cần sửa:"));
// for (var i = 0; i < cart.length; i++) {
//     if (id === i + 1) {
//         let updateOutOfDate = prompt("Nhập ngày cần sửa: ");
//         cart[i].outOfdate = updateOutOfDate;
//         console.log("------------------------------------");
//         console.log("STT: " + (i + 1));
//         console.log("Tên sản phẩm: " + cart[i].name);
//         console.log("Giá: " + cart[i].price);
//         console.log(`Ngày hết hạn mới của ${cart[i].name}: ` + cart[i].outOfdate);
//         console.log(
//             "Đơn vị phân phối: " +
//             cart[i].distributor.company +
//             " - " +
//             cart[i].distributor.address
//         );
//     }
// }

console.log("------------------------------------");
function vendingMachine(money, idProduct) {
    switch (idProduct) {
        case 1:
            {
                console.log("Mua 1 Pepsi");
                return money - 1;
            }
        case 2:
            if (money < 2) {
                console.log("Không đủ tiền mua sản phẩm " + idProduct);
                console.log("Bạn có thể mua sản phẩm 1");
                return money;
            }
            else {
                console.log("Mua 1 Cola");
                return money - 2;
            }
        case 3:
            if (money < 3) {
                console.log("Không đủ tiền mua sản phẩm " + idProduct);
                console.log("Bạn có thể mua sản phẩm 1 hoặc 2");
                return money;
            }
            else {
                console.log("Mua 1 Sting");
                return money - 3;
            }
        default:
            return money;
    }
}

let total = +prompt("Please interet money: ");

if (!isNaN(total) && parseInt(total) === total && total > 0) {
    while (total > 0) {
        let id = +prompt("Please interet ID of Product: ");
        if (!isNaN(id) && parseInt(id) === id && id > 0 && id < 4) {
            total = vendingMachine(total, id);
        }
        if (total == 0) {
            console.log("-------------------------");
            console.log("Hết tiền rồi!")
            break;
        }
    }
}