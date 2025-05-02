function getUser(){
    return new Promise((res, rej)=>{
        setTimeout(function(){
            res({id: 1, name:"Aniket"});
        }, 1000);
    })
}

function getPost(userId){
    return new Promise((res, rej) =>{
        setTimeout(function(){
            res(["Title1"], ["Title2"], ["Title3"]);
        }, 2000)
    })
}

function getComments(postID){
    return new Promise((res, rej)=>{
        setTimeout(function(){
            res(["hey"], ["hi"], ["hello"]);
        }, 3000)
    })
}

getUser()
.then(function(data){
    console.log(data);
    return getPost(data.id);
})
.then(function(titles){
    console.log(titles);
    return getComments("cmnts");
})
.then(function(cmnts){
    console.log(cmnts);
})
.finally(function(){
    console.log("all task performed");
});