$(function () {
    $('form').submit(function () {
        //trim : 문자열 앞,뒤 공백제거
        if ($.trim($('#id').val()) === '') {
            alert('ID를 입력하세요');
            $('#id').focus();
            return false;
        }
        if ($.trim($('#passwd').val()) === '') {
            alert('PW를 입력하세요');
            $('#passwd').focus();
            return false;
        }
    });
});