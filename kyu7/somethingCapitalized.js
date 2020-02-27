function testit(s){
  return s.replace(/.\b/g, char => char.toUpperCase());
}