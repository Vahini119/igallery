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
    index = 0;
    if(index >= img.length)
    document.getElementById("image").src = img[index].image;
    document.getElementById("caption").innerhtml= img[index].caption;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("caption").innerhtml= img[index].caption;
}