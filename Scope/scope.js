/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript


// SOAL 1
/// WRITE YOUR ANALYSIS HERE
// 1. Javascipt memiliki dua variable scope yaitu local dan global
// 2. a.    variabel lokal hanya tersedia dalam fungsi yang telah dideklarasikan. 
//          Variable local scope atau variable fungsi lokal adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript.
//          Variabel lokal hanya dapat diakses dari dalam fungsi tersebut. 
//          variabel Lokal biasanya ditandai dengan kurung kurawal {}.
// 
//    b.    Variable global dapat diakses di seluruh dokumen web.Semua variabel yang dibuat di luar fungsi disebut variabel global JavaScript.
//          Variabel global memiliki cakupan JavaScript global. Semua fungsi dapat mengaksesnya di seluruh halaman web
// 
// 3. a.    Variabel Lokal
            // dibagian ini variabel 'makanan' tidak dapat diakses

//          function simpleFunction(){

//           var makanan = "Bakso";
  
        // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
  
//  }

//    b.    Variabel Global
//          var makanan = "Bakso";  
            // disini kita bisa menggunakan variabel 'makanan'

//          function simpleFunction() {   

        // disini kita bisa menggunakan variabel 'makanan'
    
//  }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

// SOAL 2

// a.   Yang akan di print di console log adalah "Mariah",
// b .  Hal ini dikarenakan adanya return name.split, array ke [0]. Jadi syntax ini akan mem print string Mariah dan Carey, tetapi 
//      karena adanya [0], maka yang ditampilkan hanya string Mariah saja.