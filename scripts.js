//Learn Conditional Statement

//1. If
console.log("------------------Conditional If---------------------");

let adaTugas = true;
if (adaTugas){
  console.log("Ayo kerjakan tugas!!")
}

//2. Else
console.log("------------------Conditional Else-------------------");

let nilai = 50;
if (nilai>90){
    console.log("Wow, Luar biasa. Pertahankan!")
} else {
    console.log("Jangan putus asa, Ayo lebih giat lagi belajarnya!")
}

//3. Nested if
console.log("----------------Conditional Nested if----------------");

let hari = "Minggu";
let kegiatan = "Belajar";
if (hari == "Minggu"){
    console.log("Saya Berada Dirumah");
    if(kegiatan == "Main Game"){
        console.log("Dan Memainkan Game Resident Evil");
    } else {
        console.log("Dan Memperdalam Materi Dari Infinite Learning")
    }
} else {
    console.log("Tidak ada kegiatan, Full Turu!!")
}

//4. Switch case
console.log("---------------Conditional Switch case---------------");

let laptopgaming=2;
switch (laptopgaming){
    case 0:
        console.log("Omen Laptop 16");
        break;
    case 1:
        console.log("ASUS ROG Zephyrus Duo 16");
        break;
    case 2:
        console.log("Dell Alienware X16");
        break;
    case 3:
        console.log("Acer Predator Helios 16 PH16");
        break;
    case 4:
        console.log("MSI Titan GT77");
        break;
    case 5:
        console.log("Razer Blade 18");
        break;
    case 6:
        console.log("Lenovo Legion Pro 7i");
        break;
    default:
       console.log("Bang, udah bang. Kumpulin dana dulu :(");
}

//Learn Loop and Iteration

//5. For Statement
console.log("---------------Loop and Iteration (For)---------------");

for (let jam=20; jam <= 23; jam++){
    console.log(`Saya main game biasanya pada jam ${jam} pada hari libur`);
}

//6. While
console.log("--------------Loop and Iteration (While)--------------");

let antrian = 1;
while ( antrian < 5){
    console.log("Anda dapat menyetorkan uang anda ke teller bank setelah nomor antrian anda dipanggil, sekarang antrian ke -"+ antrian);
    antrian++;
}

//7. Do While
console.log("------------Loop and Iteration (Do While)------------");

let ujian="Pemprograman";
let tanggal=10;
do {
console.log(`Saya akan belajar dan berusaha semaksimal mungkin untuk ujian ${ujian} pada tanggal ${tanggal}😄`, tanggal);
tanggal++;
}while (tanggal<=12);

//Learn Function

//8. Function
console.log("----------------------Function-----------------------");

function belajarngoding() {
    let koding="error";
    let coba=1;
    if (coba == 1) {
        console.log(`Saya akan belajar bahasa pemrograman baru `)
        if(koding=="sukses"){
            console.log("Belajar Bahasa Kotlin Bareng Mentor😁")
        }else if (koding=="error"){
            console.log("Error dikit ga ngaruh, lanjut ngoding🤓")
        } else {
            console.log("Dahlah, nendingan main game🤣")
        }
    } else {
        console.log("Dikatakan salah juga tidak benar🥸")
    }
}

belajarngoding();
