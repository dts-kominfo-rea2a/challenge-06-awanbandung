// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf-8", (err, data) => {
    const dataJson1 = JSON.parse(data);
    if (!dataJson1.message.split(" ")[1])
      return fnCallback("Data tidak sesuai", null);

    fs.readFile(file2, "utf-8", (err, data) => {
      const dataJson2 = JSON.parse(data);
      if (!dataJson2[0].message.split(" ")[1])
        return fnCallback("Data tidak sesuai", null);

      fs.readFile(file3, "utf-8", (err, data) => {
        const dataJson3 = JSON.parse(data);
        if (!dataJson3[0].data.message.split(" ")[1])
          return fnCallback("Data tidak sesuai", null);

        const result = [
          dataJson1.message.split(" ")[1],
          dataJson2[0].message.split(" ")[1],
          dataJson3[0].data.message.split(" ")[1],
        ];

        return fnCallback(null, result);
      }); //file3
    }); //file2
  }); //file1
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
