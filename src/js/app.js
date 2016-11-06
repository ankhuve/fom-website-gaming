const Vue = require('vue');

window.addEventListener("scroll", function(event){

    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

    }
});