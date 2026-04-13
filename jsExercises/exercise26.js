
//use blocking vs non blocking

//a



function blockingM() {

    alert("please wait for two secod");

    const obj = { id: 2, name: "Xaniifa", email: "xaniifa@gmail.com" }
    console.log(obj)
    return obj;

}


console.log("this message shows up first ")

blockingM();


//b


function delaynonBlocking(callback) {
    setTimeout(() => {
        const user = { id: 2, name: "Xaniifa", email: "xaniifa@gmail.com" }
        callback(user)


    }, 2000

    )

}

console.log("before runing user info delays 2  seconds and  it shows this message firstly ")

delaynonBlocking(function (user) {
    console.log(user)

})



