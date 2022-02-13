
const name = "skilvul"; /// String
const age = 10; /// Number
const isMarried = false; /// Boolean

/// Soal - 01
/// Gunakan built-in function yang dimiliki tipe data String untuk mengubah variable name menjadi huruf besar
console.log ("-----Mengubah Variable Name Menjadi Huruf Besar-----")
const upperCase = name;
const kapital = upperCase.toUpperCase();

console.log(upperCase)
console.log(kapital)


/// Soal - 02
/// Gunakan built-in function yang dimiliki oleh Javascript, agar kita mengetahui apa tipe data yang dimiliki oleh variable age
console.log ("-----Mengetahui Tipe Data Variabel-----")
const typeOfAge = age;
const tipeData  = typeof age;

console.log(typeOfAge)
console.log(tipeData)


/// Soal - 03
/// Gunakan built-in function yang dimiliki tipe data Number untuk mengambil 2 nilai dibelakang koma dari PI
console.log ("-----Mengambil 2 Nilai dibelakang Koma Dari Pi-----")
const pi = 3.141592653589793238;
const twoDigitsOfPi = pi.toFixed(2);

console.log(pi);
console.log(twoDigitsOfPi);


/// Soal - 04
/// Gunakan built-in function yang dimiliki Javascript untuk mengetahui apakah nilai dibawah ini dapat dikategorikan sebagai Number atau tidak (NaN)
console.log ("-----Mengetahui apakah suatu  nilai dapat dikategorikan sebagai number atau tidak -----")
const isNotNumber = "10000";
const isNumber = 10000;
console.log( isNotNumber === isNumber );


/// Soal - 05
/// Gunakan built-in function yang dimiliki oleh Javascript untuk mengubah sebuah String menjadi Number
console.log ("-----Mengubah String Menjadi Number-----")
const stringToNumber = "1000";
const number = parseInt(stringToNumber) ;

console.log(stringToNumber);
console.log(number);

