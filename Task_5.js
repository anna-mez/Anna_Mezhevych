function swap(x, y) {
    return [y, x];
}

function meeting (s) {
  s = s.toUpperCase();
  arr1 = s.split(";");
  for (let i = 0; i < arr1.length ; i++) {
    temp = arr1[i].split(':');
    temp = swap(temp[0], temp[1]);
    arr1[i] = temp.join(", ");
  } 
  arr1 = arr1.sort().join(")(");
  return arr1;
}

let s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log("("+ meeting(s)+ ")")
