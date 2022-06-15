$(document).ready(function() {
    $("#login").click(function (e) {
        e.preventDefault();
        var teacherId = $("#inputId").val();
        var password = $("#inputPassword").val();
        if (!teacherId || !password) {
            $("#warning").text("Please provide all credentials!").show();
        } else if (teacherId !== 'TR1001' || password !== 'edu@1234') {
            $("#warning").text("Wrong credentials!").show();
        } else {
            $("#warning").empty().hide();
            localStorage.setItem('teacherId', teacherId)
            localStorage.setItem('password', password)
            window.location.href = "dashboard.html";
        }
    });
});