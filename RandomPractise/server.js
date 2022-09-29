
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







createServer.listen(PORT, () => `Listening to the Port ${PORT}`)