# Ex.07 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
image.html
```
<html>
    <head>
        <title>Image Gallery</title>
        <link href="gallery.css" rel="stylesheet">
        <script src="gallery.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="box">
                <img src="ashwin.jpeg" id="image" width="300">
                <p id="caption">Ashwin</p>
            </div>

            <div class="buttons">
                <button onclick="prev()">Prev</input>
                <button onclick="next()">Next</input>
            </div>

        </div>
        <div class="footer">
            <p>CREATED BY VAHINI(25018547)</p>
        </div>
    </body>

</html>
```
gallery.js
```
        var img = [
    {image:"ashwin.jpeg", caption:"ASHWIN"},
    {image:"vijay.jpeg", caption:"VIJAY"},
    {image:"ajith.jpeg", caption:"AJITH"},
    {image:"dulquer.jpeg", caption:"DULQUER"},
    {image:"download.jpg", caption:"SK"},
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerhtml= img[index].caption;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerhtml= img[index].caption;
}
```
gallery.css
```

.container
{
    display:flex;
    align-items: center;    
    background-color: rgb(201, 19, 110);
    margin-top: 100px; 
    flex-direction: column;
    border:4px solid red;
    width:450;
    margin-left:600;
    height:500;
}
.box
{
    width:300px;
    height:300px;
}
.box p
{
    text-align:center;
    font-weight:bold;
    font-size:24;
}

.buttons
{
    padding: 10px;
    gap: 25px;             
}
button
{
    width: 120px;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    margin-top:95px;
}

.footer 
{
    position:fixed;
    background-color: rgb(211, 81, 187);
    text-align: center;
    font-size: 18px;
    color:black;
    left:0;
    width:100%;
    bottom:0;
}


```

## OUTPUT:
![alt text](<Screenshot (80)-1.png>)
![alt text](<Screenshot (81)-1.png>)
![alt text](<Screenshot (82)-1.png>) 
![alt text](<Screenshot (83)-1.png>)
![alt text](<Screenshot (84)-1.png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
