function stepOne(){
    return new Promise(function(res, rej){
        console.log("Step 1");
        res();
    })
}
function stepTwo(){
    return new Promise(function(res, rej){
        console.log("Step 2");
        res();
    })
}
function stepThree(){
    return new Promise(function(res, rej){
        console.log("Step 3");
        res();
    })
}

stepOne().then(stepTwo).then(stepThree).then(function(){
    console.log("All Task Completed");
})