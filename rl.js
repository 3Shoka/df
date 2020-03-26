// Tugas Statistik Deskriptif materi Distribusi Frekuensi
// Soal. Buatlah distribusi frekuensi dengan data acak (n=100) !!!

// include module untuk bisa membaca inputan dari user
// https://nodejs.org/api/readline.html#readline_readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// n: jumlah keseluruhan data yang akan diproses
// nMin: perkiraan nilai minimum dari data yang akan di generate secara acak
// nMax: perkiraan nilai maximum dari data yang akan di generate secara acak

// variabel untuk menampung inputan dari user nantinya
let n1, min1, max1;

rl.question("Masukkan jumlah n: ", function(n) {
    n1 = n ;
    rl.question("Masukkan perkiraan nilai nMin: ", function(min) {
        min1 = min;
        rl.question("Masukkan perkiraan nilai nMax: ", function (max) {
            max1 = max;
            rl.close();
        });
    });
});


rl.on("close", function() {
    proses(n1, min1, max1);
    console.log("\nSelesai!");
    process.exit(0);
});

// fungsi untuk mencetak angka acak berdasarkan nilai minimum dan maximum
function getRandom(min, max) {
    let n = parseInt(Math.ceil(Math.random() * (max - min))) + parseInt(min); 
    return n;
}

// fungsi proses utama, memproses dan mencetak data sesuai dengan parameter yang telah diinputkan user
function proses(n, nMin, nMax) {
    // variabel array kosong untuk menampung data acak nantinya
    let numbers = [];
    // looping untuk generate angka acak sesuai dengan nilai n
    for (let index = 0; index < n; index++) {
        // proses menampung angka acak ke variabel numbers
        numbers[index] = getRandom(nMin, nMax);
    }
    console.log("=============================================");
    console.log(`1. Generate random data, nilai antara ${nMin}-${nMax}`);
    console.log(numbers);
    console.log("=============================================");

    console.log("2. Urutkan data dari nilai terkecil");
    // fungsi untuk mengurutkan data numbers acak
    let urut = numbers.sort(function (a, b) { return a - b });
    console.log(urut);
    console.log("=============================================");

    console.log("3. Jangkauan (R)");
    // mendapatkan nilai tertinggi dari data n
    let max = Math.max(...urut);
    // mendapatkan nilai terendah dari data n
    let min = Math.min(...urut);
    console.log("R = Max - Min");
    let R = max - min;
    console.log("R = " + max + " - " + min);
    console.log("R = " + R);
    console.log("=============================================");

    console.log("4. Banyaknya Kelas (k)");
    console.log("k = 1 + 3.3 log n");
    // proses rumus hitung jumlah kelas
    let k = 1 + 3.3 * Math.log10(100);
    // pembulatan nilai kebawah
    let k1 = Math.floor(k);
    // pembulatan nilai keatas
    let k2 = Math.ceil(k);
    
    console.log("k = 1 + 3.3 log " + urut.length);
    console.log("k = " + k);
    console.log("⌊k1⌋ = " + k1);
    console.log("⌈k2⌉ = " + k2);
    console.log("=============================================");

    console.log("5. Panjang interval kelas (i)");
    console.log("i = R/k");
    // percobaan menentukan interval menggunakan kelas yg di bulatkan kebawah(k1) dan keatas(k2)
    // semua hasil interval(i) dari k1 dan k2, juga dibulatkan kebawah dan keatas
    // sehingga menghasilkan i sebanyak 4 kali
    let i1a = Math.floor(R / k1);
    let i1b = Math.ceil(R / k1);
    let i2a = Math.floor(R / k2);
    let i2b = Math.ceil(R / k2);
    console.log(`i1 = R/k1 = ${R}/${k1} = ${R / k1}`);
    console.log(`⌊i1a⌋ = ${i1a}`);
    console.log(`⌈i1b⌉ = ${i1b}`);
    console.log(`i2 = R/k2 = ${R}/${k2} = ${R / k2}`);
    console.log(`⌊i2a⌋ = ${i2a}`);
    console.log(`⌈i2b⌉ = ${i2b}`);

    console.log("=============================================");

    console.log("6. Batas bawah kelas pertama");
    console.log(min);
    console.log("=============================================");

    console.log("7. Tabel frekuensi");
    // mencetak tabel frekuensi berdasarkan semua kemungkinan
    printTable(k1, i1a, urut);
    printTable(k1, i1b, urut);
    printTable(k2, i2a, urut);
    printTable(k2, i2b, urut);
}

// fungsi untuk mencetak tabel frekuensi 
function printTable(k, i, urut){
    console.log("---------------------------------------------");
    console.log(`k${k}            i${i}`);
    console.log("---------------------------------------------");
    console.log("No.| Nilai  | Frekuensi");
    let min = Math.min(...urut);
    let holder = 0;
    for (let index = 1; index <= k; index++) {
        // untuk menyimpan nilai batas bawah kelas
        // bbk = nilai minimum di tambah batas atas kelas yang terakhir
        let bbk = min + holder;
        // batas atas kelas = bbk ditambah interval dikurangi 1
        let bak = bbk + Math.ceil(i) - 1;
        // jumlah frekuensi awal
        let fr = 0;

        // looping semua data yg sudah diurutkan
        for (let x of urut) {
            // jika data berada di rentang kelas, maka frekuensi akan di tambah 1
            if (x >= bbk && x <= bak) {
                fr += 1;
            }
        }

        // mencetak nomor urut(kelas | batas bawah dan batas atas | dan frekuensi)
        console.log(index + ". | " + bbk + "-" + bak + "  | " + fr);
        // holder nilainya ditambah sesuai interval, 
        // untuk menentukan batas bawah pada kelas selanjutnya
        holder += Math.ceil(i);
    }
    console.log("---------------------------------------------");
}