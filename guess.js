var count = 0;
var vc = 0;
while (count < 1) {
    document.write(makeid() + "\n");
    vc++;
    if (vc == 50000) {
        count = 1;
    }

}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
