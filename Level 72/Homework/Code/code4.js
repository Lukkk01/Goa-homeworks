'https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript'
// Area or Perimeter

const areaOrPerimeter = function(l , w) {
    if (l > w || w > l) {
        return (l + w) * 2
    } else {
        return l * w
    }
};