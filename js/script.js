
// changing the h3 tag text

var heading = document.getElementsByTagName('h3')[2]; // get the third h5 element
heading.onclick = function(){ // adding a click event to the heading
    heading.innerHTML = "Hello World !!!"; // changing the text of the heading
}



// changing the image

var image = document.getElementById('image'); // get the image element
image.onclick = function(){
    image.src = "images/2.jpg"; // changing the image
}



// changing the para tag text

var paragraph = document.querySelectorAll('para'); // get the para element
paragraph.onclick = function(){
    paragraph.innerHTML = "paragraph"; // changing the text of the paragraph
}