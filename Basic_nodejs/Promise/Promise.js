//สร้าง Promise

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
        }, 3000);
    });
}

downloading(url1).
then(result =>{
    console.log(result);
    return downloading(url2);
}).then(result =>{
    console.log(result);
    return downloading(url3);
}).then(result =>{
    console.log(result);
    return downloading(url4);
})

/*
downloading(url1).then(result => {
    console.log(result);
    downloading(url2).then(result => {
        console.log(result);
        downloading(url3).then(result => {
            console.log(result);          
        })
    })
})
*/