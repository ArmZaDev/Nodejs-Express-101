const connect = true; //เช็คว่าต่อเน็ต
const url1 = "ajueng.dev/file1.js";
const url2 = "ajueng.dev/file2.js";
const url3 = "ajueng.dev/file3.js";
const url4 = "ajueng.dev/file4.js";
const url5 = "ajueng.dev/file5.js";

function downloading(url){
    return new Promise((resolve, reject) =>{
        console.log(`กำลังโหลดไฟล์จาก ${url}`);
        setTimeout(() => {
            if(connect){
                resolve(`ดาวน์โหลด ${url} เรียบร้อย`);
            }else{
                reject('เกิดข้อผิดพลาด');
            }
        }, 1000);
    });
}

//Async & Await

async function start(){
    console.log(await downloading(url1));
    console.log(await downloading(url2));
    console.log(await downloading(url3));
    console.log(await downloading(url4));
    console.log(await downloading(url5));
}

start();

//api ภาพสินค้า (backend)  ->  frontend (แสดงภาพในเว็บ)

//api (promise)  ->  (pending)  ->  รอข้อมูลมาครบ (await)  ->  แสดงภาพ

//loading...... -> แสดงภาพ *-_-