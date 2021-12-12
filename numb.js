
    var i=0;
    var image=document.getElementById("image");
    // Добавьте свои картинки в массив через запятую
    var imgs=new Array('img/number 1.jpg', 'img/number 3.jpg','img/number 5.jpg','img/number 6.jpg');
    function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}
