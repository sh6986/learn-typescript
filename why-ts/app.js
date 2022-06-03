// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
    axios
        .get(url)
        .then(function (res) {
            // console.log(res);
            user = res.data;
            // TODO : 이름, 이메일, 주소 표시하기
            console.log(user);
            username.innerText = user[0].name;
            email.innerText = user[0].email;
            address.innerText = user[0].address;
        })
        .catch(function (err) {
            console.log(err);
        });

    console.log(url);
}

startApp();