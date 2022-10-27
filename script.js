//nav bar
var header = document.createElement("div");
header.setAttribute("id","header");
header.setAttribute("class","header");
header.innerHTML = `
<div class="header" id="header">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a href="#" class="logo"><i class="fa fa-female fa-3x">Cosmetics</i></a>  
    <div class="navbar-nav">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" target="_blank" href="https://images-static.nykaa.com/uploads/67905114-6b56-4503-94fe-53496554e7ab.jpg?tr=w-1200,cm-pad_resize">Future products</a>
      <a class="nav-link" target="_blank" href="html/contact.html">Contact</a>      
    </div>  
</nav>
</div>
<h6>Click on the each product names to redirect the its collections page.</h6>
`
document.body.append(header);

//home page product types shown with images
var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");
container.append(row);
//get the images in an array format
var image = [];
image.push("blush.png","bronzer.png","eyebrows.png","eyeliner.png","eyeshadow.png","foundation.png","lipliner.png","lipstick.png","mascara.png","nailpolish.png");
//getting html page for each products,so put it in an array
var pages = [];
pages.push("blush","bronzer","eyebrows","eyeliner","eyeshadow","foundation","lipliner","lipstick","mascara","nailpolish")
//using for loop creating an product types
for(var i=0; i<10; i++){
  row.innerHTML += `<div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="images/${image[i]}" class="card-image">  
  <a class="products" target="_blank" href="html/${pages[i]}.html">${pages[i]}</a> 
</div>`
document.body.append(container)
}


