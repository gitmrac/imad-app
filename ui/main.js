console.log('Loaded!');
//change of text
var element=document.getElementById('main-text');
element.innerHTML='New Value';
//move the image


var img = document.getElementById('img');
img.onclick=function(){
    img.style.marginLeft = '100px';
};