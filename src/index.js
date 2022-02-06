function reverse (e) {
    const array = (""+e).split("").map(Number);
   let m = array.reverse().join('');
   let b = Number(m);
  return b;
  }