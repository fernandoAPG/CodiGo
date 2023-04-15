const form_register = document.getElementById("form_register");
const username = document.getElementById('username');
const btn_register = document.getElementById('btn_register');
username.addEventListener("keyup" , function(event)  {
    console.log(event.target.value);
});

btn_register.addEventListener("click", function(event) {
    const title = document.getElementById('title');
    const body = document.getElementById('body');
    const userId = document.getElementById("userId");
    
    fetch("https://jsonplaceholder.typicode.com/posts" ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json" ,
        },
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: parseInt(userId.value),
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() =>{
        title.value = "";
        body.value = "";
        userId.value= "";
    });
});

//*form_register.addEventListener("submit" , function(event) {
 //   event.preventDefault();
  //  const username = document.getElementById("username").value;
    //const password = document.getElementById("password").value;

    //console.log({username , password});

form_register.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title");
    const body = document.getElementById("body");
    const userId = document.getElementById("userId");

    fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: parseInt(userId.value),
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(data))
    .finally(() => {
        title.value= "",
        body.value = "",
        userId.value = "";
    });
});
