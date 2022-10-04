
const http = require('http')
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




















createServer.listen(PORT, () => `Listening to the Port ${PORT}`)