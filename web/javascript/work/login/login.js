function check() {
    let id = document.getElementById('id');
    let passwd = document.getElementById('passwd');

    if (id.value === '') {
        alert('ID를 입력하세요');
        id.focus();
        return false;
    }

    if (passwd.value === '') {
        alert('PW를 입력하세요');
        passwd.focus();
        return false;
    }
}