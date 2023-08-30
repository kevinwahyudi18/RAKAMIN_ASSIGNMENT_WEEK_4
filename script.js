// PEMBUATAN RANDOM NOMOR 1-50 PADA 100 ARRAY
let bilangan100Random = [];
function nomorRandom(){
    for (let i=0 ; i<100 ; i++){
        bilangan100Random.push(Math.floor(Math.random()*50)+1);
    }
    return bilangan100Random
}
nomorRandom();


// PEMECAHAN MENJADI 2 ARRAY (GENAP DAN GANJIL)
let genap = []
let ganjil = []
function pemecahanArrayGenapGanjil(ganjilGenap){
    for(let k=0 ; k<ganjilGenap.length ; k++){
        if (k%2==0){
            genap.push(ganjilGenap[k]);
        }
        if (k%2!=0){
            ganjil.push(ganjilGenap[k]);
        }
    }
    return {ganjil, genap}
}
pemecahanArrayGenapGanjil(bilangan100Random);


// MENENTUKAN MIN, MAX, TOTAL DAN RATA-RATA PADA ARRAY GANJIL DAN GENAP
// MIN GANJIL GENAP
const menentukanMin = (bilangan) => {
    let min = bilangan[0];
    for(let i=1 ; i<bilangan.length ; i++){
        if(min>bilangan[i]){
            min = bilangan[i];
        }
    }
    return (min);
}
let genapMin = menentukanMin(genap);
let ganjilMin = menentukanMin(ganjil);

// MAX GANJIL GENAP
const menentukanMax = (bilangan) => {
    let max = bilangan[0];
    for(let i=1 ; i<bilangan.length ; i++){
        if(max<bilangan[i]){
            max = bilangan[i];
        }
    }
    return (max);
}
let genapMax = menentukanMax(genap);
let ganjilMax = menentukanMax(ganjil);

// TOTAL GANJIL GENAP
const menentukanTotal = (bilangan) => {
    let total = 0;
    for(let i=0 ; i<bilangan.length ; i++){
        total = total + bilangan[i];
    }
    return (total);
}
let genapTotal = menentukanTotal(genap);
let ganjilTotal = menentukanTotal(ganjil);

// RATA-RATA GANJIL GENAP
let genapRataRata = (menentukanTotal(genap))/genap.length;
let ganjilRataRata = (menentukanTotal(ganjil))/ganjil.length;


// TEST DEBUGGING
console.log(bilangan100Random)
console.log(genap);
console.log(ganjil);
console.log("Min Genap: " + menentukanMin(genap));
console.log("Min Ganjil: " + menentukanMin(ganjil));
console.log("Max Genap: " + menentukanMax(genap));
console.log("Max Ganjil: " + menentukanMax(ganjil));
console.log("Total Genap: " + menentukanTotal(genap));
console.log("Total Ganjil: " + menentukanTotal(ganjil));
console.log("Rata-rata Genap: " + genapRataRata);
console.log("Rata-rata Ganjil: " + ganjilRataRata);


// PERBANDINGAN KEDUA ARRAY
// PERBANDINGAN MIN
if(genapMin > ganjilMin){
    console.log("Min lebih besar array genap");
}
else if (genapMin < ganjilMin){
    console.log("Min lebih besar array ganjil");
}
else {
    console.log("Min ganjil sama dengan min genap");
}

// PERBANDINGAN MAX
if(genapMax > ganjilMax){
    console.log("Max lebih besar array genap");
}
else if (genapMax < ganjilMax){
    console.log("Max lebih besar array ganjil");
}
else {
    console.log("Max ganjil sama dengan min genap");
}

// PERBANDINGAN TOTAL
if(genapTotal > ganjilTotal){
    console.log("Total lebih besar array genap");
}
else if (genapTotal< ganjilTotal){
    console.log("Total lebih besar array ganjil");
}
else {
    console.log("Total ganjil sama dengan min genap");
}

// PERBANDINGAN RATA-RATA
if(genapRataRata > ganjilRataRata){
    console.log("Rata-rata lebih besar array genap");
}
else if (genapRataRata < ganjilRataRata){
    console.log("Rata-rata lebih besar array ganjil");
}
else {
    console.log("Rata-rata ganjil sama dengan min genap");
}






