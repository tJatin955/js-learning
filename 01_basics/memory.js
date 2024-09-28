//   stack memory used by primitive datatypes
// heap memory used by non-primitive datatypes

let myYoutubeName = "jatinyoutubedotcom"
let anotherName = myYoutubeName
anotherName = "tjatin"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "abc@google.com",
    upi:  "abc@ybl"
}

let userTwo = userOne;

userTwo.email = "bhanu@google.com"
console.log(userOne.email)