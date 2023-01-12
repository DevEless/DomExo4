var h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements[1].textContent);

var liElements = document.getElementsByTagName("li");
console.log(liElements[liElements.length - 1].textContent);

var pElement = document.getElementsByTagName("p")[0];
console.log(pElement.textContent.toUpperCase());


var liElements = document.getElementsByTagName("li");
liElements.forEach(function (li) {
    console.log(li.textContent.toUpperCase());
}); 