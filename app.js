// 1)
let arr1=[23,1,5,3,12,4,9,81,7,11,22,31,6]
let arr2=[]
let arr3=[]
console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]%2===0){
       arr2.push(arr1[i])
    }
    else{
        arr3.push(arr1[i])
    }
}
arr2.sort(function(a, b) {
  return a - b;
});
arr3.sort(function(a, b) {
    return a - b;
  });
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]===arr2[arr2.length-1]){
        arr1[i]=arr3[0]
        
    }
    
}
console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]===arr3[0]){
        arr1[i]=arr2[0]
    }
    
}
console.log(arr1);
// 2)
let  arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
{ urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
{ urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
{ urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
{ urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
];
let result=arr.filter(x=>x.fiyat>50)
console.log(result)
// 3)
let result1=arr.filter(x=>x.kategori==="Meyve ve Sebzeler")
console.log(result1)
// 4)
let result2=arr.filter(x=>x.kategori==="Meyve ve Sebzeler" && x.stok>2 )
console.log(result2)
// 5)
let result3=arr.filter(x=>x.urunAdi==="Süt" )
for (let i = 0; i < result3.length; i++) {
    if(result3[i].urunAdi==="Süt"){
        console.log(true) 
    }
    else{
       console.log(false) 
    }
}
// 6
let result4=arr.filter(x=>x.urunAdi==="Ton Balığı" )
for (let i = 0; i< result4.length; i++) {
      if(result4[i].urunAdi==="Ton Balığı")
      console.log(i)
    } 
