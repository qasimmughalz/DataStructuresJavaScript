
const http = require('http')
const nodemon = require('nodemon')
const { toUnicode } = require('punycode')
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



function SmallestDifferennceOptimized(arrayOne, arrayTwo){

    let sortedarrayOne = arrayOne.sort((a,b)=> a-b)
    let sortedarrayTwo = arrayTwo.sort((a,b)=> a-b)

    let smallest =  Math.abs(sortedarrayOne[0] - sortedarrayTwo[0])
    let arrayOneIndex = 0;
    let arrayTwoIndex = 0;

    let result = [sortedarrayOne[arrayOneIndex] , sortedarrayTwo[arrayTwoIndex]]

    while(true){
        if((arrayOneIndex + arrayTwoIndex) === (arrayOne.length + arrayTwo.length)){
            console.log('Found First', result)
            return false
        }
        let diff = Math.abs(sortedarrayOne[arrayOneIndex] - sortedarrayTwo[arrayTwoIndex])
       
       
        if(diff < smallest){
            smallest = diff
            result[0] = sortedarrayOne[arrayOneIndex] 
            result[1] = sortedarrayTwo[arrayTwoIndex]
        }
        
        if(sortedarrayOne[arrayOneIndex] < sortedarrayTwo[arrayTwoIndex]){
            arrayOneIndex++
        }else{
            arrayTwoIndex++
        }
    
    }
}


SmallestDifferennceOptimized([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])




createServer.listen(PORT, () => `Listening to the Port ${PORT}`)