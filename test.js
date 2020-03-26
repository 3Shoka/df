function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

let numbers = [];
for (let index = 0; index < 100; index++) {
    numbers[index] = parseInt(getRandom(52, 98));
}
console.log("=============================================");
console.log("1. Generate random data, nilai antara 52-100")
console.log(numbers);
console.log("=============================================");

console.log("2. Urutkan data dari nilai terkecil");
let urut = numbers.sort();
console.log(urut);
console.log("=============================================");

console.log("3. Jangkauan (R)");
let max = Math.max(...urut);
let min = Math.min(...urut);
console.log("R = Max - Min");
let R = max - min;
console.log("R = "+max+" - "+min);
console.log("R = "+ R);
console.log("=============================================");

console.log("4. Banyaknya Kelas (k)");
console.log("k = 1 + 3.3 log n");
let k = Math.ceil(1 + 3.3 * Math.log10(100));
console.log("k = 1 + 3.3 log "+ urut.length);
console.log("k = "+ k );
console.log("=============================================");

console.log("5. Panjang interval kelas (i)");
console.log("i = R/k");
let i = Math.ceil(R/k);
console.log("i = " + i);
console.log("=============================================");

console.log("6. Batas bawah kelas pertama");
console.log(min);
console.log("=============================================");


console.log("7. Tabel frekuensi");
console.log("No.| Nilai  | Frekuensi");

let holder = 0;
for (let index = 1; index <= k; index++) {
    // const element = array[index];
    let bbk = min+holder;
    let bak = bbk + Math.ceil(i) - 1;
    let fr = 0;

    for (let x of urut) {
        if(x >= bbk && x <= bak){
            fr +=1;
        }
    }

    console.log(index + ". | " + bbk +"-" + bak + "  | " + fr);
    holder += Math.ceil(i);
}