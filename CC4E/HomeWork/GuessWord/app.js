const wordData = [
    { word: "BANH MY", hint: "Đồ ăn tốt vào buổi sáng" },
    { word: "QUAN VOT", hint: "Môn thể thao phổ biến bắt nguồn từ nước Anh" },
    { word: "PYTHON", hint: "Một ngôn ngữ lập trình phổ biến" },
    { word: "TET NGUYEN DAN", hint: "Một trong những ngày lễ lớn ở Việt Nam" },
    {
        word: "TIENG TAY BAY NHA",
        hint: "Một trong những ngôn ngữ phổ biến nhất thế giới",
    }
];

const getRandomWord = (wordData) => {
    const index = Math.floor(Math.random() * wordData.length);
    return wordData[index];
};
const question