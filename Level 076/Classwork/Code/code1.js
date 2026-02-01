'https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript'
// Remove All The Marked Elements of a List

Array.prototype.remove_ = function(integer_list, values_list){
  let result = [];

  for (let i = 0; i < integer_list.length; i++) {
    let number = integer_list[i];

    if (!values_list.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

