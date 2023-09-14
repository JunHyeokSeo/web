function check() {
    let writer = document.getElementById('writer');
    let passwd = document.getElementById('passwd');
    let subject = document.getElementById('subject');
    let content = document.getElementById('content');

    if (writer.value === '') {
        alert('작성자명을 입력하세요');
        writer.focus();
        return false;
    }

    if (passwd.value === '') {
        alert('비밀번호를 입력하세요');
        passwd.focus();
        return false;
    }

    if (passwd.value.length < 2 || passwd.value.length > 8) {
        alert('비밀번호는 2~8자 이내로 입력하세요');
        passwd.value = '';
        passwd.focus();
        return false;
    }

    if (subject.value === '') {
        alert('제목을 입력하세요');
        subject.focus();
        return false;
    }

    if (subject.value.length > 50) {
        alert('제목을 50자 이내로 입력하세요');
        subject.value = '';
        subject.focus();
        return false;
    }

    if (content.value === '') {
        alert('내용을 입력하세요');
        content.focus();
        return false;
    }

    if (content.value.length > 200) {
        alert('내용을 200자 이내로 입력하세요');
        content.value = '';
        content.focus();
        return false;
    }
}