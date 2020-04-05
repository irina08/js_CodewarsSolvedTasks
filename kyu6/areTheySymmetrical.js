/* Give you an ```obj```, it can be 3 types: string, number and number array,
Check that they are symmetrical or not, return a boolean value.
#Example:
```
obj=""    return true   (Empty string should return true)
obj="1"   return true   (one char should return true)
obj="11"  return true
obj="12"  return false
obj="121" return true
obj=1     return true   (number<10  should return true)
obj=-1    return false  (negative number should return false)
obj=10    return false
obj=11    return true
obj=12    return false
obj=121   return true
obj=[]    return true  (Empty array should return true)
obj=[1]   return true  (an array with one element should return true)
obj=[1,2,3,4,5]      return false
obj=[1,2,3,2,1]      return true
obj=[11,12,13,12,11] return true   (left element = right element)
obj=[11,12,21,11]    return false  (not verify them as a string)
```
#Code length calculation
In javascript, we can't get the user's real code, we can only get the system compiled
code. Code length calculation is based the compiled code.

For example:

If you typed ```sc=x=>x+1```
after compile, it will be:```sc=function(x){return x+1;}```
 */

sc = (o) => {
  if (typeof o !== 'object')
    o = (o + '').split('');
  return o + '' === o.reverse()+'';
}