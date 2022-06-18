$(document).ready(function () {
    var teacherId = localStorage.getItem('teacherId')
    var password = localStorage.getItem('password')
    if (!teacherId || !password) {
        window.location.href = window.location.origin + '/practice'
    }

    $("#logout").click(function (e) {
        e.preventDefault();
        window.location.href = window.location.origin + '/practice'
    });
});