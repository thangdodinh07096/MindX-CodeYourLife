const loginForm = document.getElementById("login");
const errorEl = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userEl = event.target.user.value;
    const pwdEl = event.target.pwd.value;
    const pwdConfirmEl = event.target.pwdConfirm.value;

    if (userEl.length < 5) {
        errorEl.innerHTML = "Tên đăng nhập ít hơn 4 ký tự";
    } else {
        if (pwdEl !== pwdConfirmEl || pwdEl.length < 6 || pwdConfirmEl.length < 6) {
            errorEl.innerHTML = "Nhập lại mật khẩu";
        } else {
            errorEl.innerHTML = "";
        }1
    }
});
