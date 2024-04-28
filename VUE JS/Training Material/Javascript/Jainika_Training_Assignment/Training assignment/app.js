// Task1 -> Finding substring -

var stringValue = "fragilisticexpialidocious";
var subStringValue = stringValue.substring(11);
console.log(subStringValue);



// Task2 ->  Program for performing string methods - 

var stringValue = "Javascript Training";
var numberValue = 100;

console.log("charAt() - " + stringValue.charAt(1));

console.log("indexOf() - "+ stringValue.indexOf('T'));

console.log("replace() - " + stringValue.replace('Training', 'Assignment'));

console.log("substr() - "+ stringValue.substr(0, 5));

console.log("substring() - "+ stringValue.substring(11,19));

console.log("toLowerCase() - "+ stringValue.toLocaleLowerCase())

console.log("toString() - "+ numberValue.toString());

console.log("trim() - "+ stringValue.trim());

console.log("split() - "+stringValue.split(' '));



// Task3 -> Add or remove classnames - 
var a = document.getElementById('link');
var button = document.getElementById('button');
button.addEventListener('click', () => {

    if(a.classList.contains('show')){
        a.classList.remove('show');
        a.classList.add('hide');
    }
    else{
        a.classList.add('show');
        a.classList.remove('hide');
    }


    // OR: 
    // a.classList.toggle('show');
    // a.classList.toggle('hide');

})


