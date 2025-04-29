const PI = Math.PI;
function findArea(radius) {
    if(radius <= 0){
        return "Invalid radius";
    }
    else{
        let area = PI * radius * radius;
        return area;
    }
}
function findCircumference(radius) {
    if(radius <= 0 ){
        return "Invalid radius";
    }
    else{
        let circumference = 2 * PI * radius;
        return circumference;
    }
}

module.exports = {findArea , findCircumference};