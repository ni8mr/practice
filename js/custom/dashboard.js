$(document).ready(function (){
    var teacherId = localStorage.getItem('teacherId')
    var password = localStorage.getItem('password')
    if (!teacherId || !password) {
        window.location.href = 'index.html'
    }
    $("#teacher-id-to-show").empty().append(teacherId)
    $("#logout").click(function (e) {
        e.preventDefault();
        window.location.href = 'index.html'
    })
})