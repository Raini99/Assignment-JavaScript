/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

// SOAL 1

//  - TypeError      => Telah Terjadi Kesalah Type. Ini terjadi saat kita menggunakan nilai yang berada di luar kisaran tipe 
//                      yg diharapkan.
//  - ReferenceError => Ini terjadi jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
//  - Range Error    => Ini terjadi jika kita menggunakan angka yang berada di luar rentang nilai ilegal.
//  - Syntax Error   => Hal ini terjadi jika kita mencoba untuk mengevaluasi kode dengan kesalahan sintaks.


/// SOAL 2
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;


//  a.  Jika kode diatas dijalankan maka akan terjadi error.
//  b.  Error di atas merupakan jenis SyntaxError.
//  c. Hal ini terjadi karena seharusnya variabel terlebih dahulu di definisikan baru kemudian dapat memanggil dengan
//      syntax console.log.