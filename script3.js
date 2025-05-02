function fakeAPI(endpoint){
    const data = {
      user : ["Aniket", "John", "Doe"],
      post : ["Hey", "Hi", "Hellow"],
    };

    let delay = Math.random() * 2000 + 1000; 

    return new Promise((res, rej)=>{
        setTimeout(function(){
            res(data[endpoint]);
        }, delay)
    });
}

fakeAPI("user").then(function(data){
    console.log(data)
});
fakeAPI("post").then(function(data){
    console.log(data);
})