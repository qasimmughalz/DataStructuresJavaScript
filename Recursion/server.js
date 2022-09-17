
const http = require('http')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()

// write two functions that finds the factorial of any Number. 
// One should use recursive and other should use the loop




// ============ MY SOLUTION ================
// This funnction cost a lot of memory and time 

// function recFac(num){
//     let fact = 1;
//     function recurring(num){
//         if(num > 0){
//             fact = fact * num
//             num --
//             return recurring(num)
//         }
//         else{
//             return 
//         }
//     }
//     recurring(num)
//     return fact
// }


// check = recFac(5)
// console.log(check)


// ============ ANDRIE SOLUTION ==========


// function recurFunc(num){
//     if(num === 2){
//         console.log("entered", num)
//         return num
//     }
//     console.log("num", num)
//     return num * recurFunc(num - 1)
// }

// // num 5 
// // 5* 4 * 3 * 
// let check = recurFunc(4)
// console.log(check)


// ========== MY SOLUTION =>  Recursion with looop  =======


// steps : 
// 1- loops from num to 0
// 2- separate variable store the resultant value 
// 3- if condition > 1 then do this -> fact = 1;
//  fact = fact * i 
//  when its === 0 it simply returns 


// fact = 1
// num = 3

// 1- 1*3 = 3
// 2- 3*2 = 6
// 3- 6*1 = 6
// 4-  

// function factLoop(num){
//     let fact = 1;
//     if(num === 0 || num ===1 ){
//         console.log(num)
//         return
//     }else{
//         for(let i=num; i>0; i--){      || let -=2 ; i<= num ; i++      // by andire
//             fact = fact *  i
//         }
//     }
//     console.log(fact)
// }

// factLoop(4)






// ======================== QUESTION 2 - FIBONACCU SERIES ====================

// 0,1,1,2,3,5,8,13,21,34,55.....

// 1- i create a looop and then 
// when i get the indexedDB, i will simply run the loop till the index , so it does not


// First Method

// function fibonacci(index){
// let arr = [0,1];
// for(let i=1;i<=index;i++){
//     arr.push(arr[i]+arr[i-1])
// }
// return arr[arr.length -2]
// }
// let check = fibonacci(5)
// console.log(check)


// function recFabonaci(index){
    

//     if(fab.length )
//     recFabonaci(index +  (index-1))
//     let fab = [0,1]
// }




// 0,1,1,2,3,5,8,13,21,34,55

// 21,13,8,5,3,2,1,1,0



// Dry Run: 
// index-> 5
// 1-> 5+4 = 9
// 2-> 9+1 = 10 
// 3-> 10+1= 






createServer.listen(PORT, () => `Listening to the Port ${PORT}`)