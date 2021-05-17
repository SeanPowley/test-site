let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images-folder/test-site.jpg1.jpg') {
        myImage.setAttribute('src','images-folder/grey-fox.jpg');
    } else {
        myImage.setAttribute('src','images-folder/test-site.jpg1.jpg');
    }
}    
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter our name.');
    localStorage.setItem('name' myName);
    myHeading.textContent = 'Foxes are console,' +myName;
} 