function dblLinear(n) {
  let number = 2, index = 1, s = new Set();
  s.add(1);
  while (true)
  {
    let temp = number;
    let check = 0;
    if ((temp - 1) % 3 === 0)
    {
      temp = Math.floor((temp - 1) / 3);
      if (s.has(temp)) check = 1;
    }
    temp = number;
    if ((temp - 1) % 2 === 0)
    {
      temp = Math.floor((temp - 1) / 2);
      if (s.has(temp)) check = 1;
    }
    if (check === 1)
    {
      s.add(number);
      index ++;
    }
    if (index === n + 1) return number;
    number += 1;
  }
}