var x = [1,2,3,4];
console.log(x);

const func = (val) => {
    console.log(val);
}

func(123);
x.forEach(func);

console.log("xin chào mọi người tôi là dãy {x}");