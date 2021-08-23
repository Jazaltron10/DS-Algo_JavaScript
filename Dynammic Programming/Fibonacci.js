const fib = (n, memo={}) =>{
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    let result = memo[n];
    return result 
}


console.log(fib(5))
console.log(fib(8))
console.log(fib(13))
console.log(fib(20))
console.log(fib(50))

james = 45 + "," + 234
console.log(james)


let american = {
    name:"james",
    country: "america",
    "age": 36
}
console.log(american.name)
console.log(american.age)
console.log(american["age"])
let kemo ={
    1:30,
    2:"gasket",
    3: "007",
    "4": 3
}
console.log(kemo[1])
console.log(kemo[2])
console.log(kemo[3])
console.log(kemo["4"])

