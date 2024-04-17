document.addEventListener('DOMContentLoaded', function() {
    var signUpForm = document.querySelector('.sign-up-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止默认的提交行为

        // 在这里执行你的逻辑，例如打印表单内容
        console.log('表单已提交');

        // 如果需要，你可以获取表单中的输入内容
        var username = signUpForm.querySelector('input[type="text"]').value;
        var email = signUpForm.querySelector('input[type="email"]').value;
        var password = signUpForm.querySelector('input[type="password"]').value;

        console.log('用户名：', username);
        console.log('邮箱：', email);
        console.log('密码：', password);

        // 将表单数据保存到 localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // 跳转到新页面
        location.replace('log.html');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var signinForm = document.querySelector('.sign-in-form');
    
    // 从 localStorage 中获取用户名和密码
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');
    
    // 如果用户名和密码存在，则填充到登录表单中
    if (savedUsername && savedPassword) {
        signinForm.querySelector('input[type="text"]').value = savedUsername;
        signinForm.querySelector('input[type="password"]').value = savedPassword;
    }
});