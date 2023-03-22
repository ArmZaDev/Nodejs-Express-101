//โปรแกรมดาวโหลดไฟล์
//CallBack Hell

const url1 = "ajueng.dev/file1.js";
const url2 = "ajueng.dev/file2.js";
const url3 = "ajueng.dev/file3.js";
const url4 = "ajueng.dev/file4.js";
const url5 = "ajueng.dev/file5.js";

function downloading(url, callback){
    console.log(`Downloading... ${url}`);
    setTimeout(() => {
        callback(url);
    }, 3000);
}

downloading(url1, function(result){
    console.log(`Download ${result} Complete!`);
    downloading(url2, function(result){
        console.log(`Download ${result} Complete!`);
        downloading(url3, function(result){
            console.log(`Download ${result} Complete!`);
            downloading(url4, function(result){
                console.log(`Download ${result} Complete!`);
                downloading(url5, function(result){
                    console.log(`Download ${result} Complete!`);
                });
            });
        });
    });
});

/*
function complete(){
    console.log("Download Complete!");
}
*/