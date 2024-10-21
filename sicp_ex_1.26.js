function square(x) {
    return x * x;
}

function expmod(base, exp, m) {
    return exp === 0
          ? 1
          : is_even(exp)
          ? square(expmod(base, exp / 2, m)) % m
          : (base * expmod(base, exp - 1, m)) % m;
}

// Louis's function
function is_even(n) {
    return n % 2 === 0;
}

function expmod(base, exp, m) {
    return exp === 0
          ? 1
          : is_even(exp)
          ? (  expmod(base, exp / 2, m)
              * expmod(base, exp / 2, m)) % m
          : (base * expmod(base, exp - 1, m)) % m;
}

expmod(4, 2, 5);

// In the original program, when the exp is even, it call upon the function 
// square which takes the value evaluated in expmod and multiplies it by 
// itself. In doing so, it eliminates the need to evaluate expmod twice, 
// halfing the number of steps taken and hence making the time complexity 
// Θ(logn). This allows the program to run faster than a program that has 
// time complexity of Θ(n).

// In the case of the funciton written by Louis, by use an explicit 
// multiplication rather than calling the funcrtion square, expmod 
// needs to be evaluated twice in lines 22 and 23. This is inefficient 
// as both cases where expmod is being evaluated, it returns the same 
// value. This also results in the time complexity of Louis's function 
// to be Θ(n) which is why he finds that his program seems to fun slowly