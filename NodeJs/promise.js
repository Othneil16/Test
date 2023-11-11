 //PROMISE FUNCTION

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

wait(5000).then(() =>{
    console.log(`the class is over today`);
})
.catch(() => {
    
})