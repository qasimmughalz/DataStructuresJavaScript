
const { time } = require('console')
const { stat } = require('fs')
const http = require('http')
const nodemon = require('nodemon')
const { toUnicode } = require('punycode')
const { start } = require('repl')
const { resourceLimits } = require('worker_threads')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()

// Structure 
//     4
//    /  \
//   0    4


// ============= SORT BY ZERO ONE TWO ==============


// class LinkedList{
//     constructor(value){
//         this.head = {
//             value:value, 
//             next:null, 
//         }
//         this.tail = this.head
//     }

//     print(msg){
//         const arr = []
//         let currentNode = this.head
//         while(currentNode != null){
//             arr.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         console.log(msg, arr)
//     }

//     createNode(value){
//         return {
//             value: value, 
//             next:null, 
//         }
//     }

//     insert(value){
//         let node = this.createNode(value)
//             this.tail.next = node
//             this.tail = node
//     }

//     TaketoHead(value){
//         let node = this.createNode(value)
//         node.next = this.head
//         this.head = node
//     }


// //  0-2-1


//     DeleteNode(value){
//         let currentNode = this.head
//         let prevNode;
//         let ForwardNode;
        
//         while(currentNode != null){
//             if(currentNode.value === value){
//                 prevNode = currentNode
//                 ForwardNode = currentNode.next
//                 prevNode.next = ForwardNode
//             }
//             currentNode = currentNode.next
//             }

//         this.print('checking at delete ')

//     }

//     traverse(index){
//         let currentNode = this.head
//         for(let i=0;i<=index;i++){
//             currentNode = currentNode.next
//         }
//         return currentNode
//     }

//     sortByZeroOneTwo(){
//         let currentNode = this.head
//         let count = 0;

//         while(currentNode != null){
//             if(currentNode.value === 2){
//                 this.TaketoHead(currentNode.value)
//                 let leader = this.traverse(count - 1 )
//                 let unwanted = leader.next
//                 leader.next = unwanted.next
//                 currentNode = leader.next
//             }
//             currentNode = currentNode.next
//            count++
//         }

//         currentNode = this.head
//         count = 0;
//         while(currentNode != null){
//             if(currentNode.value === 1){
//                 this.TaketoHead(currentNode.value)
//                 let leader = this.traverse(count - 1 )
//                 let unwanted = leader.next
//                     leader.next = unwanted.next
//                     currentNode = leader.next
//             }
//             currentNode = currentNode.next
//            count++
//         }
//         currentNode = this.head
//         count = 0;
//         while(currentNode != null){
//             if(currentNode.value === 0){
//                 this.TaketoHead(currentNode.value)
//                 let leader = this.traverse(count - 1 )
//                 let unwanted = leader.next
//                 leader.next = unwanted.next
//                 currentNode = leader.next
//             }
//             currentNode = currentNode.next
//            count++
//         }

//     }

// }


// const test = new LinkedList(0)
// test.insert(1)
// test.insert(2)
// test.insert(0)
// test.insert(1)
// test.insert(0)
// test.insert(2)
// test.insert(2)
// test.insert(1)
// test.insert(1)
// test.insert(0)



// test.print('Brefore')
// test.sortByZeroOneTwo()
// test.print('After')



// ==================== QUEUE IMPLEMENTATION =======================


// class Queue{
//     constructor(value){
//         this.head = {
//             value:value, 
//             next:null
//     }
//     this.tail = this.head
//     }
    
//     node(value){
//         return {
//             value:value, 
//             next:null
//         }
//     }

//     enqueue(value){
//         let node = this.node(value)
//         this.tail.next = node
//         this.tail = node
//     }

//     dequeue(){
//         if(!this.head){
//             return null
//         }
//         if(this.head === this.tail){
//             this.tail = null
//         }
//         this.head = this.head.next
//     }

//     peek(){
//         console.log(this.head.value)
//     }
    
//     print(){
//         let currentNode = this.head
//         let arr=[]
//         while(currentNode){
//             arr.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         console.log(arr)
//     }

// }

// const que = new Queue(1);
// que.enqueue(2)
// que.enqueue(3)
// que.enqueue(4)
// que.enqueue(5)

// que.peek()
// que.print()




// ===================== Stack Implementaion ================


// class Stack{
//     constructor(value){
//         this.head = {
//             value:value, 
//             next:null
//         }
//         this.tail = this.head
//     }

//     Node(value){
//         return {
//             value:value, 
//             next:null
//         }
//     }

//     push(value){
//         let node = this.Node(value)
//         this.tail.next = node
//         this.tail = node
//     }

//     pop(){
//         if(!this.head){
//             return 
//         }

//         if(this.tail === this.head){
//             this.head = null
//         }
//         else{
//             let currentNode = this.head
//             let nextNode = currentNode.next
//             while(nextNode.next){
//                 currentNode = currentNode.next
//                 nextNode = nextNode.next
//             }
//             this.tail = currentNode
//             this.tail.next = null
//         }       
        
//     }

//         print(){
//         let currentNode = this.head
//         let arr=[]
//         while(currentNode){
//             arr.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         console.log(arr)
//     }
// }

// const stack = new Stack(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.push(8)

// stack.pop()
// stack.pop()
// stack.pop()
// stack.print()



// ================= Tree Implementation =================


// class BST{
//     constructor(value){
//         this.root = {
//             value:value, 
//             left:null, 
//             right:null
//         }
//     }


//     Node(value){
//         return {
//             value:value,
//             left:null, 
//             right:null
//         }
//     }

//     add(value){
//         let currentNode = this.root
//         let newNode = this.Node(value)

//         while(currentNode.left != null && currentNode.right != null){
//             if(value > currentNode.value){
//                 currentNode = currentNode.right
//             }
//             if(value < currentNode.value){
//                 currentNode = currentNode.left
//             }
//         }

//         if(value > currentNode.value){
//             currentNode.right = newNode
//         }else{
//             currentNode.left = newNode
//         }
//     }


//     addTrue(value){
//         let newNode = this.Node(value)
//         let currentNode = this.root

//         while(true){
//             if(value > currentNode.value){
//                 if(!currentNode.right){
//                     currentNode.right = newNode
//                     return this
//                 }
//                 currentNode = currentNode.right
//             }else{
//                 if(!currentNode.left){
//                     currentNode.left = newNode
//                     return this
//                 }
//              currentNode = currentNode.left
//             }
//         }
//     }


//     available(value){
//         let currentNode = this.root

//         while(true){
//             if(!currentNode){
//                 console.log('Not Found')
//                 return
//             }
//             if(value === currentNode.value){
//                 console.log("Found Value", currentNode)
//                 return
//             }
//             else{
//                 if(value > currentNode.value){
//                     currentNode = currentNode.right
//                 }else{
//                     currentNode = currentNode.left
//                 }
//             }
//         }
//     }










    
// }


// // const bst = new BST(22)
// // bst.add(30)
// // bst.add(15)


// const bst = new BST(22)
// bst.addTrue(30)
// bst.addTrue(12)
// bst.addTrue(14)
// bst.addTrue(25)
// bst.addTrue(23)
// bst.addTrue(29)
// // console.log('TREE:', bst.root)



// bst.available(29)


// ================== Sliding Window Problem  MAx Sub Array =============

// function Slide(array , k){

//     let subarray = new Array()
//     for(let i=0; i< k ; i++){
//         subarray.push(array[i])
//     }
//     let max = 0;
//     for(let i=0;i <= array.length - k; i++){
//         let sum = array[i];
//         for(let j=i+1 ; j < i+k ;j++){
//             sum = sum + array[j]
//         }
//         if(max < sum){
//             max = sum
//         }
//     }
    
//     console.log("Final MAX IS ", max)
// }

// Slide([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)


// ================== Optimized Sliding Window MAx Sub Array =========

// function optimizeSubarray(array , k){

//     let sum = 0;
//     let max = 0;
//     for(let i=0;i<k;i++){
//         sum += array[i]
//     }
//     max = sum;
//     let slider = k

//     for(let j=0; j < array.length -k; j++){
//         sum = (sum - array[j]) + array[slider]
//         if(sum > max){
//             max = sum
//         }
//         slider++
//     }
//     console.log('Max sum is :', max)
// }

// optimizeSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)



// class CircularLinkedList{
//     constructor(value){
//         this.head = {
//             value:value, 
//             next:this.head
//         }
//         this.tail = this.head
//     }

//     newNode(value){
//         return {
//             value:value, 
//             next:this.head
//         }
//     }


//     insertAtStart(value){
//         let node = this.newNode(value)
//         node.next = this.head
//         this.head = node
//         this.tail.next = this.head
//     }

//     insert(value){
//         let node = this.newNode(value)
//         this.tail.next = node
//         this.tail = node
//     }

//     insertAtEnd(value){
//         let node = this.newNode(value)
//         this.tail.next = node
//         this.tail = node
//     }


//     findPreviousNode(position, value){
//         let currentNode = this.head
//         for(let i=1;i<position;i++){
//             if(currentNode.next.value === this.head.value){
//                 this.insertAtStart(value)
//             }
//             currentNode = currentNode.next
//         }
//         return currentNode
//     }


//     insertAtPosition(position, value){
//         let node = this.newNode(value)
//         let previousNode = this.findPreviousNode(position -1, value)
//         if(!previousNode){   
//             return
//         }else{
//             node.next = previousNode.next
//             previousNode.next = node
//         }

//     }

//     print(){
//         let currentNode = this.head
//         let arr = []
//         while(true){
//             if(currentNode.next.value === this.head.value){
//                 arr.push(currentNode.value)
//                 console.log('Array',arr)
//                 return false
//             }
//             else{
//                 arr.push(currentNode.value)
//                 currentNode = currentNode.next
//             }
//         }
//     }

// }


// const LL = new CircularLinkedList(10)
// LL.insert(20)
// LL.insert(30)
// LL.insert(40)
// LL.insert(50)
// LL.insert(60)
// LL.insert(70)

// LL.insertAtStart(5)
// LL.insertAtStart(1)
// LL.insertAtStart(0)

// LL.insertAtEnd(100)

// LL.insertAtPosition(,444)



// LL.print()




// ============= Remove Dublicate in a linkedList ==================


// class DublicateRemoveLinkedList{
//     constructor(value){
//         this.head = {
//             value:value, 
//             next:null
//         }
//         this.tail = this.head
//     }

//     newNode(value){
//         return {
//             value:value, 
//             next:null
//         }
//     }

//     insert(value){
//         let node = this.newNode(value)
//         this.tail.next = node
//         this.tail = node
//     }


//     removeDubligate(){
//         let currentNode = this.head
//         let previousNode = null
//         while(true){
//             if(!currentNode.next){
//                 previousNode.next = currentNode.next
//                 return
//             } else {
//                 if(currentNode.value === currentNode.next.value){
//                     if(!previousNode){
//                         previousNode = currentNode
//                     }
//                 } else{
//                     if(previousNode){
//                         previousNode.next = currentNode.next
//                         previousNode = null
//                     }
//                 }
//             }
//             currentNode = currentNode.next
//         }
//     }


//     // removenode(position){
//     //     let currentNode = this.head
//     //     let previous  = currentNode
//     //     for(let i=1;i<= position;i++){
//     //         previous = currentNode
//     //         currentNode = currentNode.next
//     //     }
//     //     previous.next = currentNode.next
//     // }


//     removeDublicateTwo(){
//         let currentNode = this.head
//         let nextDistinctNode = null
//         while(currentNode){
//             nextDistinctNode = currentNode.next
//             while(nextDistinctNode && currentNode.value === nextDistinctNode.value){
//                 nextDistinctNode = nextDistinctNode.next
//             }
//             currentNode.next = nextDistinctNode
//             currentNode = nextDistinctNode
//         }
//     }






//     print(){
//             let currentNode = this.head
//                 let arr = []
//                 while(currentNode){
//                         arr.push(currentNode.value)
//                         currentNode = currentNode.next
//             }
//          console.log('LinkedList :', arr)
//     }

// }




// const dbl = new DublicateRemoveLinkedList(1)

// dbl.insert(1)
// dbl.insert(2)
// dbl.insert(2)
// dbl.insert(2)
// dbl.insert(3)
// dbl.insert(3)
// dbl.insert(3)
// dbl.insert(3)
// dbl.insert(4)


// dbl.print()
// dbl.removeDublicateTwo()
// dbl.print()



// function TripppletsSumTarget(incomingarray, targetSum){
//     const array = incomingarray.sort((a,b)=> a-b)
//     let result = []
//     let MostRightPointer = 0;
//     let size = array.length
//     for(let i=0; i<array.length;i++){
//         if(array[i] >= targetSum){
//             break;
//         }
//         let lastPointer = size -1
//         MostRightPointer = i+1
//         while(MostRightPointer < lastPointer){
//             const sum = array[i] + array[MostRightPointer] + array[lastPointer]
//             if(sum > targetSum){
//                 lastPointer--
//             }
//             if(sum < targetSum){
//                 MostRightPointer++
//             }
//             if(sum === targetSum){
//                 result.push([array[i] , array[MostRightPointer] , array[lastPointer]] )
//                 MostRightPointer++;
//                 lastPointer--
//             }
//         }
//     }
//    return result
// }




// function TripppletsSumTarget(array, targetSum){
//     let sorted = array.sort((a,b)=> a-b)
//     let result = []
    
//     for(let i=0;i<array.length;i++){
//         if(array[i] >= targetSum){
//             console.log(array[i])
//             break;
//         }
//         let start = i+1;
//         let end = array.length -1 

//         while(start < end){
//             const sum = sorted[i] + sorted[start]+ sorted[end]

//             if(sum === targetSum){
//                 result.push([sorted[i] , sorted[start], sorted[end]])
//                 start++;
//                 end--
//             }else if(sum < targetSum){
//                 start ++
//             }else{
//                 end--
//             }
            
//         }

//     }

//     console.log(result)
   
// }




// TripppletsSumTarget([12,3,1,2,-6,5,-8,6], 0)



// function check(string){
//     let i=0;
//     let j=string.length -1;
//     const result = PalindroneCheck(string , i, j)
//     console.log(result)

// }


// function PalindroneCheck(string , i , j){
//     console.log('values : ', i, j, string[i], string[j])
//     if(string[i] != string[j]){
//         return false
//     }
//     if( i === j || j <= 0 ){
//         return true
//     }

//     i++;
//     j--
//     return PalindroneCheck(string, i, j)
// }


// ================= Finding the Caeser Cipher Encryption ============

// function cipher(string, key){

//     let arr = string.split('')
//     let newarr = []
//     console.log(arr)

//     for(let i=0;i<string.length;i++){
//         let code = string[i].charCodeAt()
//         newarr.push(code)
//     }
//     for(let i=0;i<newarr.length;i++){
//        let count =  newarr[i]+ key
//        newarr[i] = count
//        if(count > 122){
//          let diff = count - 122
//          newarr[i] = diff+96
//        }
//     }

//     let result= newarr.map((data)=>{
//         return String.fromCharCode(data)
//     })
//     let converted = result.join('')
//     console.log(converted)
// }   



// cipher('xyz', 2)



// ==================== Finding the Smallest Difference Point =========


// function SmallestDifferennce(arrayOne, arrayTwo){
//     let smallest = Math.abs(arrayOne[0] + arrayTwo[0])
//     let result = [arrayOne[0], arrayTwo[0]]
//     for(let i=0;i<arrayOne.length;i++){
//         for(let j=0;j<arrayTwo.length;j++){
//             let diffence = Math.abs(arrayOne[i] - arrayTwo[j])
//             if(diffence < smallest){
//                 smallest = diffence
//                 result[0] = arrayOne[i]
//                 result[1] = arrayTwo[j]
//             }
//         }
//     }
//     return result
// }



// function SmallestDifferennceOptimized(arrayOne, arrayTwo){

//     let sortedarrayOne = arrayOne.sort((a,b)=> a-b)
//     let sortedarrayTwo = arrayTwo.sort((a,b)=> a-b)

//     let smallest =  Math.abs(sortedarrayOne[0] - sortedarrayTwo[0])
//     let arrayOneIndex = 0;
//     let arrayTwoIndex = 0;

//     let result = [sortedarrayOne[arrayOneIndex] , sortedarrayTwo[arrayTwoIndex]]

//     while(true){
//         if((arrayOneIndex + arrayTwoIndex) === (arrayOne.length + arrayTwo.length)){
//             console.log('Found First', result)
//             return false
//         }
//         let diff = Math.abs(sortedarrayOne[arrayOneIndex] - sortedarrayTwo[arrayTwoIndex])
       
       
//         if(diff < smallest){
//             smallest = diff
//             result[0] = sortedarrayOne[arrayOneIndex] 
//             result[1] = sortedarrayTwo[arrayTwoIndex]
//         }
        
//         if(sortedarrayOne[arrayOneIndex] < sortedarrayTwo[arrayTwoIndex]){
//             arrayOneIndex++
//         }else{
//             arrayTwoIndex++
//         }
    
//     }
// }


// SmallestDifferennceOptimized([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])





// function moveToEnd(array, toMove ){

//     let count = 0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]=== toMove){
//             array.splice(i, 1)
//             i = i-1
//             count++;
//         }
//     }
//     for(let j=0;j<count;j++){
//         array.splice(array.length , 0, toMove )
//     }
//     return array
// }

// function swap(left, right, array){
//     let temp = array[left]
//     array[left] = array[right]
//     array[right] = temp
//     return array
// }

// function OptimizeMoveToEnd(array , toMove){
//     let left = 0;
//     let right = array.length - 1;
//     while(left< right){
//         if(array[right] === toMove){
//             right--;
//         }
//         else{
//             if(array[left] === toMove){
//                 swap(left, right, array)
//             }
//             left++
//         }
//     }
//     return array
// }


// function OptimizeMoveToEnd(array , toMove){
//     let left = 0;
//     let right = array.length -1;
//     console.log(array)
//     while(left< right){
//         if(array[left] === toMove){
//             while(array[right] === toMove){
//                 right--
//             }
//             swap(left , right , array)
//             left++;
//             right--
//         }else{
//             left++
//         }
//     }
//     return array
// }

// OptimizeMoveToEnd([2,1,4,6,3,2,2], 2)




// function MonotonicArray(array){
    
//     let state;
//    for(let i=0;i<array.length;i++){
//         if(!state){
//             if(array[i] > array[i+1]){
//                 state = true
//            }
//            else if(array[i] < array[i+1]){
//                state = false
//            }
           
//         }
//         else {
//             break
//         } 
//    }
    
//     for(let i=0;i<array.length -1;i++){
//         if(state){
//             if(array[i] < array[i+1]){
//                return console.log(false)
//             }
//         }else{
//             if(array[i] > array[i+1]){
//                 console.log("Checking", array[i], i)
//                return  console.log(false)
//             }
//         }
//     }

//     if(!state){
//        console.log(true)
//     }else{
//         console.log(true)
//     }

// }


// function MonotonicArrayOptimized(array){
//     let increasing = true;
//     let decreasing = true;

//     for(let i=0;i<array.length -1;i++){
//         if(array[i] < array[i+1]){
//             decreasing = false
//         }
//         if(array[i] > array[i+1]){
//             increasing = false
//         }
//     }

//    console.log( increasing || decreasing )

// }

// MonotonicArrayOptimized( [1,2,3,5,1] )




// function SpiralProblem(array){

//     let result = []
//     let startRow = 0;
//     let endRow = array.length - 1;
//     let startCol = 0;
//     let endCol = array[0].length - 1;

   
//     while(startRow < endRow && startCol < endCol){
//         for(let col = startRow  ; col <= endCol ; col++){
//             result.push(array[startRow][col])
//         }
//         for(let row = startRow +1  ; row <= endRow ; row++){
//             result.push(array[row][endCol])
//         }
//         for(let col = endCol -1 ; col>= startCol; col--){
//             if(endRow > startRow){
//                 result.push(array[endRow][col])
//             }
//         }
//         for(let row = endRow -1 ; row > startRow ; row --){
//             if(endCol > startCol){
//                 result.push(array[row][startCol])
//             }
//         }
//         startRow++
//         startCol++
//         endRow--
//         endCol--
//     }
//     return result
// }




// SpiralProblem([
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
//   ])



// function getPeak(array){

//     let currentPeak = 0
//     let LongestPeak = 0

//     for(let i=1;i<=array.length -2;i++){
//         let ispeak = array[i-1] < array[i] && array[i+1] < array[i]
       
//         if(ispeak){
//             currentPeak = getStreak(array, i)
//             console.log('peak ', currentPeak)
//             if(currentPeak > LongestPeak){
//                 LongestPeak = currentPeak
//             }
//         }
//     }
//    console.log(LongestPeak)
// }

// function getStreak(array, i){
//     console.log('yes', i)
//     let left = i;
//     let right = i;
//     while(array[left-1] < array[left]){
//         left--
//     }
//     while(array[right+1] < array[right]){
//         right++
//     }
//     return right - left + 1
// }

// getPeak([1,3,2])



// ================    Array Of Products =================


// function ArrayOfProducts(array){
//     let result = []
//     let leftProduct = []
//     let rightProduct = []
//     let product = 1;
   
//     for(let i=0;i<array.length;i++){
//         if(i==0){
//             leftProduct.push(product)
//         }else{
//             product *= array[i-1]
//             leftProduct.push(product)
//         }
//     }
    
//     product = 1 
//     for(let i=array.length -1;i>=0;i--){
//         if(i==array.length-1){
//             rightProduct.push(product)
//         }else{
//             product *= array[i+1]
//             rightProduct.push(product)
//         }
//     }

//     let start = 0;
//     let end = array.length -1 ;

//     for(let i=0;i<array.length;i++){
//         let pro = leftProduct[start] * rightProduct[end]
//         result.push(pro)
//         start++
//         end--
//     }
//     console.log(leftProduct, rightProduct)
//     return result
// }

// let result = ArrayOfProducts([5,1,4,2])
// console.log(result)



// function FirstDublicateValue(array){

//     let hashtable = {}
//     for(let i=0;i<array.length;i++){
//         if(hashtable[array[i]]){
//           return array[i]
//         }else{
//             hashtable[array[i]] = true
//         }
//     }
//     return -1
// }

// let result = FirstDublicateValue([2, 1, 5, 2, 3, 3, 4])

// console.log('check result', result)


// ==================== First Overlapping Array =======

// function OverlappingArray(array){

//     let sort = array.sort((a,b)=> a[0]-b[0])
//     let output = []
//     output.push(array[0])

//     for(let i=1;i<array.length;i++){
//         if(output[output.length -1][1] >= array[i][0]){
//             output[output.length -1]= [output[output.length -1][0], Math.max(output[output.length -1][1], array[i][1],)]
          
//         }else{
//             output.push(array[i])
//         }
//     }
//    console.log(output)
// }

// OverlappingArray([[1, 2],[3, 5],[4, 7],[6, 8],[9, 10]])



// function FourNumberSum(incoming, target){

//     let array = incoming.sort((a,b)=> a-b)

//     let mySet = new Set()
//     let left =0; 
//     let right =0;
//     let sum =0;
//     let result = []

//     for(let i=0;i<array.length -1;i++){
//         for(j=i+1;j<array.length-1;j++){
//             left = j+1;
//             right = array.length -1
//             while(left<right){
//                 sum = array[i]+array[j]+array[left]+array[right]
//                 if(sum === target){
//                     let quad = [array[i], array[j], array[left],array[right]]
//                     mySet.add(quad)
//                     left++
//                 }
//                 else if(sum < target){
//                     left++
//                 }
//                 else if(sum > target){
//                     right--
//                 }
//             }
//         }
//     }
//    mySet.forEach(element => {
//     result.push(element)
//    })
//    return result
// }

// const result = FourNumberSum([7, 6, 4, -1, 1, 2], 16)
// console.log(result)



// function SubArraySort(array){

//     let final = []
//     let min = 0;
//     let max = 0;
//     let flag = false;

//     for(let i=0;i<array.length;i++){
//         if(array[i] > array[i+1]){
//         flag = true
//            min = Math.min(array[i], array[i+1])
//            max = Math.max(array[i], array[i+1])
//         }
//     }
//     if(flag){
//         for(let i=0;i<array.length;i++){
//             if(array[i] >= min){
//                 final.push(i )
//                 break
//             }
//         }
    
//         for(let i=array.length ;i>0;i--){
//             if(array[i] <= max){
//                 final.push(i)
//                 break
//             }
//         }
//         return final
//     }else{
//         return [-1,-1]
//     }
    
// }

// let result = SubArraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
// console.log(result)



//  function LargestRange(array){
//     let min=array[0];
//     let max=min;
//    let  result = []
//     let breakPoint = null
//     let hashtable = {}

//     for(let i=0;i<array.length;i++){
        
//       if(array[i] < min ){
//             min = array[i]
//       }
//       if(array[i] > max){
//           max = array[i]
//       }
  
//       if(!hashtable[array[i]]){
//             hashtable[array[i]] = true
//         }
//     }

//     if(array.length === 1){
//         return [array[0], array[0]]
//     }
  
//        for(let i=min;i<=max;i++){
//         if(!hashtable[i]){
//             if(!breakPoint){
//                 result.push([min, i-1])
//                 breakPoint = i
//             }
//             if(breakPoint){
//                 result.push([breakPoint +1, max])
//                 breakPoint = 
//                 i++
//             }
//         }
//     }
    
//     let maxx = 0;
//     let ans = null;
//     for(let i=0;i<result.length;i++){
//         let diff =result[i][1] - result[i][0]
//         if(diff > maxx){
//             ans = result[i]
//         } 
//     }
//     if(ans){
//         return ans
//     }
//     return [min, max]
//  }

//  let result = LargestRange( [8, 4, 2, 10, 3, 6, 7, 9, 1])
// console.log(result)




function ProductOFArray(array){

    let product = 1;
    let leftside = []
    let rightSide = []
    let output = []

    // setting left side of the array 
    for(let i=1;i<=array.length;i++){
        leftside.push(product)  
        product = product * array[i-1]
    }

    // setting right side of the array 
    product = 1;
    for(let i=array.length-1;i>=0;i--){
        
        rightSide.push(product)
        product = product * array[i]    
    }


    let pro = 1;
    let left = 0;
    let rightt = array.length -1;
    for(let i=0;i<array.length;i++){
        pro = leftside[left] * rightSide[rightt]
        output.push(pro)
        left++;
        rightt --
    }
    return output

}

let result = ProductOFArray([5,1,4,2])
console.log(result)









createServer.listen(PORT, () => `Listening to the Port ${PORT}`)