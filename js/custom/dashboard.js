$(document).ready(function (){
    var teacherId = localStorage.getItem('teacherId')
    var password = localStorage.getItem('password')
    if (!teacherId || !password) {
        window.location.href = window.location.origin + '/practice'
    }
    $("#teacher-id-to-show").empty().append(teacherId);

    $(".subject").click(function (e) {
        e.preventDefault()
        $("#chapter-list").show();
        $("#subject-list").hide();
    });

    var chapter = '';
    $("#chapters").change(function () {
        $("#chapter-selection-error").hide();
       chapter = $(this).val();
    });

    $("#back-from-chapter").click(function (e) {
        e.preventDefault();
        $("#chapter-list").hide();
        $("#subject-list").show();
    });

    $("#get-lessons").click(function (e) {
       e.preventDefault();
       if (chapter) {
           var optionsForLessons
           $("#chapter-selection-error").hide();
           if (chapter === 'chap01') {
               optionsForLessons = '<option disabled selected>পাঠ বাছাই করুন</option>' +
                   '<option value="less01">পাঠ ১</option>' +
                   '<option value="less02">পাঠ ২</option>'
           } else if (chapter === 'chap02') {
               optionsForLessons = '<option disabled selected>পাঠ বাছাই করুন</option>' +
                   '<option value="less03">পাঠ ৩</option>' +
                   '<option value="less04">পাঠ ৪</option>'
           }
           $("#lessons").empty().append(optionsForLessons);
           $("#chapter-list").hide();
           $("#lesson-list").show();
       } else {
           $("#chapter-selection-error").show();
       }
    });

    $("#back-from-lesson").click(function (e) {
        e.preventDefault();
        $("#lesson-list").hide();
        $("#chapter-list").show();
    });

    var lesson = '';
    $("#lessons").change(function () {
        $("#lesson-selection-error").hide();
        lesson = $(this).val();
    });

    $("#start-evaluation").click(function (e) {
        e.preventDefault();
        if (lesson) {
            $("#lesson-selection-error").hide();
            $("#lesson-list").hide();
            $("#checklist").show();
        } else {
            $("#lesson-selection-error").show();
        }
    });

    $("#back-from-checklist").click(function (e) {
        e.preventDefault();
        $("#lesson-list").show();
        $("#checklist").hide();
    });

    $(".form-check-input").change(function(e) {
        e.preventDefault();
        var id = $(this).attr('id')
        var idIncrement = id.split("-")[1]
        var value = $(this).is(":checked")
        if (id.split("-")[2] === 'yes' && value) {
            $("#" + "indic-" + idIncrement + "-no").prop('checked', false)
        } else if (id.split("-")[2] === 'no' && value) {
            $("#" + "indic-" + idIncrement + "-yes").prop('checked', false)
        }
    });

    $("#logout").click(function (e) {
        e.preventDefault();
        window.location.href = window.location.origin + '/practice'
    });
})