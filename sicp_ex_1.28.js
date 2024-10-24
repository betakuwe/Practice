function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}

function expmod(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else if (is_even(exp)) {
        const exponential_modulo = expmod(base, exp / 2, m);
        if (exponential_modulo === 1 || exponential_modulo === m - 1) {
            return 0;
        } else {
            return square(exponential_modulo) % m;
        }
    } else {
        return (base * expmod(base, exp - 1, m)) % m;
    }
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 0;
    }
    return try_it(2 + math_floor(math_random() * (n - 3)));
}

function miller_rabin_test(n, a) {
    return expmod(a, n - 1, n) === 0;
}

function test_all(n) {
    function iter_test_all(a) {
        // return !miller_rabin_test(n, a) 
        // ? false
        // : a === n - 2
        // ? true
        // : iter_test_all(a + 1); 
        // if (!miller_rabin_test(n, a)) {
        //     return false;
        // } else if (a === n - 2) {
        //     return true;
        // } else {
        //     return iter_test_all(a + 1); 
        // }
        return miller_rabin_test(n, a) && (a === n - 2 || 
        iter_test_all(a + 1));
    }
    return iter_test_all(2); 
}
display(test_all(34));
display(test_all(100));
display(test_all(35));
display(test_all(1105));
display(test_all(2821));
display(test_all(43));
display(test_all(5));
display(test_all(1009));
display(test_all(13));
display(test_all(561));
// function fast_is_prime(n, times) {
//     return times === 0
//           ? true
//           : fermat_test(n)
//           ? fast_is_prime(n, times - 1)
//           : false;
// }

//display(fermat_test(6));
//display(fermat_test(561));
//display(fermat_test(3));
//display(fermat_test(5));