let mting = document.querySelector('img');

mting.onclick = function(){
    let mysrc = mting.getAttribute('src');
    if(mysrc === 'images/vigate.jpg')
    {
        mysrc = 'images/kelin.jpg';
    }else{
        mysrc = 'images/vigate.jpg';
    }

    mting.setAttribute('src', mysrc);

}

let mybutton = document.querySelector('button');
let myheader = document.querySelector('h1');

function setuserName()
{
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null)
        setuserName();
    localStorage.setItem('name', myName);
    myheader.textContent = '你好呀' + myName;
}

if(!localStorage.getItem('name'))
{
    setuserName();
}else
{
    let storeName = localStorage.getItem('name');
    myheader.textContent = "你好呀" + storeName;
}

mybutton.onclick = function(){setuserName();}