const PI = Math.PI;
function myarea(radius) {
    return PI * radius * radius;
}
function mycircumference(radius) {
    return 2 * PI * radius;
}
module.exports = {
    myarea,
    mycircumference
};
