$(document).ready(function (){
    var teacherId = localStorage.getItem('teacherId')
    var password = localStorage.getItem('password')
    if (!teacherId || !password) {
        window.location.href = window.location.origin + '/practice'
    }
    $("#teacher-id-to-show").empty().append(teacherId);

    $("#science").click(function (e) {
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
               optionsForLessons = '<option disabled selected>Select a lesson</option>' +
                   '<option value="less01">Lesson 1</option>' +
                   '<option value="less02">Lesson 2</option>'
           } else if (chapter === 'chap02') {
               optionsForLessons = '<option disabled selected>Select a lesson</option>' +
                   '<option value="less03">Lesson 3</option>' +
                   '<option value="less04">Lesson 4</option>'
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

    $("#logout").click(function (e) {
        e.preventDefault();
        window.location.href = window.location.origin + '/practice'
    });
})