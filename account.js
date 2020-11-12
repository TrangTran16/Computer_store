var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";

}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}


$('#btn-register').on('click', function(){
    var reg_name = $("#reg_name").val();
    var reg_email = $("#reg_email").val();
    var reg_password = $("#reg_password").val();

    let listUser = localStorage.getItem('db_users')

    if(listUser == null) {
        localStorage.setItem('db_users', JSON.stringify([]))
        listUser = localStorage.getItem('db_users')
    }
    listUser = JSON.parse(listUser)
    // console.log(productNew);
    let user = {
        id: listUser.length + 1,
        name: reg_name,
        reg_email: reg_email,
        reg_password: reg_password
    }

    listUser.push(user)
    localStorage.setItem('db_users', JSON.stringify(listUser))
    localStorage.setItem('memberLogin', JSON.stringify(Object.assign(user, {isLogin: true})))

    window.location.href = 'index.html'
})