// function valid() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (username == "admin" && password == "user") {
//         alert("login succsfuly");
//         return false
//     } else {
//         alert("login falid");
//     }
// }

var myId = document.getElementById("login_form");

baseApi = "http://136.244.90.233:5057/api";
loginApi = baseApi + "/auth/login";

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

myBody = JSON.stringify({
    userName: username,
    password: password
});




function sendHttpRequest({ formId, path, body, requestType }) {
    var form = formId
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        fetch(path, {
                method: requestType,
                body: body,
                headers: {
                    "accept": "text/plain",
                    "Content-Type": "application/json"
                }
            })
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                console.log(data);
            })
    })
};