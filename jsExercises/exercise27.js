

function readData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = false;
            if (sucess == true) {
                resolve({ id: 100, name: "Xaniifa", email: "X@gmail.com" })
            }
            else {
                reject("failed to read Data")
            }
        }, 2000)
    })
}
readData().then((data) => {
    console.log("user data:", data)
})
readData().catch((Error) => {
    console.log(Error)

})



