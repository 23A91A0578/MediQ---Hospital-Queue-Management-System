function init()
{
    let user=JSON.parse(localStorage.getItem('Login_details'));
    document.querySelector('#name').innerText='Welcome, '+user.fullname;
}