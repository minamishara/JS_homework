// var a = 1, b = 1, c, d;
// c = ++a; alert(c);
// //2 в префисной форме икремент возвращает значение операнда с добавленной к нему единицей; .*/
//
// d = b++; alert(d);           // 1 В постфиксной форме сначала произошло только возрат самого знаения b.
// // F потом выполнит инкрементирование
//
// c = (2+ ++a); alert(c);      // 5 (2 уже вывелось и теперь увеличилось на 1, то есть стало 3. 2 + 3 = 5),
// // а потом, а так как приоритет у унарных выше
// d = (2+ b++); alert(d);      // 4  (постфиксная форма = 1, выполняется инкремент( +1) + арифметическое сложение +2
// alert(a);                    // 3 (берет значение из вычисленного уравененис С ( строчка 7)
// alert(b);               // 3 ( изнчачальный b + икермент из строчки 5 и искремент из строчки 9
//
//
// let a = 2;
// let x = 1 + (a *= 2); //4 + 1 = 5
// alert(x);
//
// //3
//
//
// let a= 5;
// let b = -2;
// if (a >= 0 && b >= 0) {
//    x = a - b;
//
// } else if (a < 0 && b < 0) {
//     x = a * b;
// }
// else { //(a >= 0 && b<0 || a < 0 && b >= 0)//
//     x = a + b;
// }
//
// alert(x);
//
// //
// // let a= 5;
// // let b = -2;
// // let x = (a >= 0 && b >= 0) ? (a - b):
// //     (a < 0 && b < 0) ? (a * b):(a + b);
// // alert(x);
//
// //
// //4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
//
//
// switch(a){
//     case 1:
//         console.log (1);
//     case 2:
//         console.log (2);
//     case 3:
//         console.log (3);
//     case 4:
//         console.log (4);
//     case 5:
//         console.log (5);
//     case 6:
//         console.log (6);
//     case 7:
//         console.log (7);
//     case 8:
//         console.log (8);
//     case 9:
//         console.log (9);
//     case 10:
//         console.log (10);
//     case 11:
//         console.log (11);
//     case 12:
//         console.log (12);
//     case 13:
//         console.log (13);
// }
//
//
// function sum(a, b) {
//     return (a + b);
// }
// function subt(a, b) {
//     return (a - b);
// }
// function increase(a, b) {
//     return (a * b);
// }
//
// function div(a, b) {
//     return (a / b);
// }
//
//
//
//
//
//
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case '+' :
//             return sum(arg1, arg2);
//             break;
//         case '-' :
//             return subt(arg1, arg2);
//             break;
//         case '*' :
//             return increase(arg1, arg2);
//             break;
//         case '/' :
//             return div(arg1, arg2);
//             break;
//     }


    var result = 1;
    var i = 1
    function power(val, pow) {
        // result = val*val;
        // result *= val;
        // result = val;
        // result = result*val;
        // // result *= val;
        // for (var i = 1; i < pow; i++) {
        //     result *= val;
        // }
        result *= val; i++;
        if(i <= pow) {
            power(val, pow);
        }
        else {
       console.log(result);
    }
}
    power (5, 9);


