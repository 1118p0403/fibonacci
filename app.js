'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    }   else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
    ///引数nを5 とした場合
    ///fib(5)が実行される
    ///fib(4) + fib (3)が結果として返される
    ///fib(4) + fib (3)を数値として出力するために、それぞれの関数を数値にする処理が実行される

        ///fib(4)=fib(3)+fib(2)

            ///fib(3)=fib(2)+1
                ///fib(2)→1+0=1
            ///よって、fib(3)=fib(2)+1=1+1=2
            ///fib(2)=1+0=1 より、
        ///fib(4)→2+1=3

        ///fib(3)=2より(左辺で同様の計算を行っている為省略)
    ///fib(4)+fib(3)=3+2=5
    ///よって、fib(5)=5
}

const length = 40;

for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
