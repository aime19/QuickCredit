function showrecover(){
    var login = document.getElementById('login');
    login.classList.remove('animate-left');
    login.classList.add('animate-right');
    login.classList.remove('animate-right');
    login.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.remove('hidden');
    recover.classList.add('animate-right')
}
function showlogin(){
    var recover = document.getElementById('recover');
    recover.classList.remove('animate-right');
    recover.classList.add('animate-left');
    recover.classList.remove('animate-left');
    recover.classList.add('hidden');
    var login = document.getElementById('login');
    login.classList.remove('hidden');
    login.classList.add('animate-left')
}
function showregisteronlogin(){
    var login = document.getElementById('login');
    login.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.add('hidden');
    var register = document.getElementById('register');
    register.classList.remove('hidden');
    register.classList.add('animate-bottom')
}
function showregisteronrecover(){
    var recover = document.getElementById('recover');
    recover.classList.add('hidden');
    var register = document.getElementById('register');
    register.classList.remove('hidden');
    register.classList.add('animate-bottom')
}
function showrecoveronregister(){
    var register = document.getElementById('register');
    register.classList.remove('animate-right');
    register.classList.add('animate-left');
    register.classList.remove('animate-left');
    register.classList.add('hidden');
    var recover = document.getElementById('recover');
    recover.classList.remove('hidden');
    recover.classList.add('animate-left')
}
function showloginonregister(){
    var register = document.getElementById('register');
    register.classList.remove('animate-right');
    register.classList.add('animate-left');
    register.classList.remove('animate-left');
    register.classList.add('hidden');
    var login = document.getElementById('login');
    login.classList.remove('hidden');
    login.classList.add('animate-left')
}