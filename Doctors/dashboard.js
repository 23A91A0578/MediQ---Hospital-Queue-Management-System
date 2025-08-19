function init()
{
    let user=JSON.parse(localStorage.getItem('Login_details'));
    document.querySelector('#dr-name').innerText='Dr.'+user.fullname;
    document.querySelector('.full-name').innerText='Dr. '+ user.fullname;
    document.querySelector('.email').innerText=user.email;
    document.querySelector('.number').innerText='+91 '+user.phone;
    document.querySelector('.role').innerText=user.role;
}