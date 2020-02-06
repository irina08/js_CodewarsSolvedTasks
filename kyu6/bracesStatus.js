/* Write a function that checks the braces status in a string,
and return True if all braces are properly closed, or False otherwise.
Available types of brackets: (), [], {}.
Examples
"([[some](){text}here]...)"  =>  true
"{([])}"                     =>  true
"()[]{}()"                   =>  true
"(...[]...{(..())}[abc]())"  =>  true
"1239(df){"                  =>  false
"[()])"                      =>  false
")12[x]34("                  =>  false
 */

const bracesStatus = s => {
    s = s.replace(/[^\(\)\[\]\{\}]/g, "");
    while (/\(\)|\[\]|\{\}/.test(s)) s = s.replace(/\(\)|\[\]|\{\}/g, "");
    return s.length === 0;;
};