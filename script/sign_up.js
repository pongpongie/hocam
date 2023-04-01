$(document).ready(function () {
    $("#signupBtn").click(function () {
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var passwordConfirm = $("#password-confirm").val();
        $.ajax({
            url: "",
            type: "POST",
            data: {
                username: username,
                password: password,
                email: email,
                passwordConfirm: passwordConfirm
            },
            success: function (data) {
                console.log(data)
                alert("회원가입이 완료되었습니다.");
                window.location.href = "./index.html"
            },
            error: function (data) {
                console.log(data)
                alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
            }
        });
    });
});