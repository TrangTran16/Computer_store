$(function(){
    $user = localStorage.getItem('user')

    if($user == null){
        window.location.href = 'login.html'
    }

    $user = JSON.parse($user)
    if($user != null && $user.isLogin) {
        $('#show_username').text('Xin chao Admin')
    }else{
        window.location.href = 'login.html'
    }

    $('#onLogout').on('click', function(){
        localStorage.removeItem('user')
        window.location.href = 'login.html'
    })
  
})

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});