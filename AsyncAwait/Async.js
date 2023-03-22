function rice() {
    setTimeout(() => {
        console.log("ข้าวสุก");
    }, 5000)
}

function boil() {
    setTimeout(() => {
        console.log("ต้มไข่");
    }, 500)
}

function fry() {
    setTimeout(() => {
        console.log("ทอดไข่");
    },300)
}

rice();
boil();
fry();