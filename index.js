

$("#generate").on("click",function(){
    $("#generate").css("backgroundColor","blue")
    setTimeout(function(){
    $("#generate").css("backgroundColor","");},100);
    /*var inp = document.querySelector("#input");
    var val = inp.value;
    console.log(val);
    var qr_svg = qr.image(val);
    qr_svg.pipe(require('fs').createWriteStream('qr_image.png'));*/
});




