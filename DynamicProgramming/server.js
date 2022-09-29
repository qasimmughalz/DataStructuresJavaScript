
const http = require('http');
const { isNullOrUndefined } = require('util');
const PORT = process.env.PORT || 8000
const createServer = http.createServer()



// function memoizationAddto80(){
//     let cache = {}
//      return function(num){
//         if(num in cache){
//             return cache[num]
//         }else{
//             console.log("Long Runned")
//             cache[num] = num + 80
//             return cache[num]
//         }
//     }
// }

// function fbonacci(){
//     let cache = {}
//     return function fib(num){
//         if(num in cache){
//         }else{
//             if(num < 2){
//                 return num
//             }else{
//                 cache[num] = fib(num-1) + fib(num-2)
//                 return cache[num]
//             }
//         }
//     }
// }

// const fabFast = fbonacci()
// console.log('cecking ', fabFast(10))



// const ans = memoizationAddto80()
// console.log(ans(5))
// console.log(ans(5))
// console.log(ans(5))
// console.log(ans(5))
// console.log(ans(5))




// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//     let result=[];
//     console.log("length of array ", array)
    
//       for(let i=0;i<array.length;i++){
//         console.log("check i:", i)
//         for(let j=0;j<array.length;j++){
//             console.log("values : ", i, j)
//             if(i == j){
//                 continue
//             }
//             if((array[i] + array[j]) === targetSum){
//               result.push(array[i])
//               result.push(array[j])
//               return result
//             }
//         }
//     }
//     return result
    
//   }
  

//   let result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
//   console.log("the resultant is ", result)




// function HashSumNumbers(array, target){
    

//     const seenValues = new Set()

//     for(let num of array){

//         let

//     }

// }

// const result = HashSumNumbers([6,4,1], 5)
// console.log("Results :", result)




// function SubSequence(array, subsequence){
//     let temphashmap ={}
//     for(let num of subsequence){
//         temphashmap[num] = true
//     }

//     let tempResultant = []
    
//     for(let i =0;i<array.length;i++){
//         console.log("cheee", i)
//         console.log("---", temphashmap[array[i]])
//         if(temphashmap[array[i]]){
//             tempResultant.push(array.indexOf(array[i]))
//         }
       
//     }
//     console.log("check my tempresult ", tempResultant)
// }

// SubSequence([3,5,2,7,4,5,8], [8,7,3])



// function sortedSquaredArray(array) {
//     // Write your code here.
//     let squaredArray = []
//     let nagativeValues = {}
//     let startingIndex =0;
  
//     // check positive and negative numbers 
//     for(let i=0;i<array.length;i++){
//         if(array[i] > 0){
//             console.log("check kara", array[i])
//             startingIndex = i
//             break;
//         }
//     }


//      console.log("check kara", startingIndex)

//      for(let i=0;i<array.length;i++){
//         if(array[i] < 0){
//             nagativeValues[Math.abs(array[i])] = true
//           }
//         }
    
//         console.log("see", nagativeValues)

//     if(Object.keys(nagativeValues).length > 0){
//         console.log("negativve al", nagativeValues)
//         if(startingIndex > 0){
//             console.log("normal")
//             //set negative numbers in the hashmap
//             for(let i=startingIndex;i<array.length;i++){
//                 squaredArray.push(array[i] * array[i])
//                 if(nagativeValues[array[i]]){
//                     console.log("negative check ", array[i])
//                   squaredArray.push(array[i] * array[i])
//                 }
//             }
//         }else{
//             console.log("inside else running")
//         for(let i=array.length-1 ; i >= 0 ; i--)
//         {
//             squaredArray.push(array[i] * array[i])
//         }
//         }
        
//     }else{
//         console.log("else running")
//         for(let i=0 ; i < array.length ; i++)
//         {
//             squaredArray.push(array[i] * array[i])
//         }

//     }
    
    
//     return squaredArray;
//   }

//  const result =  sortedSquaredArray([-7, -3, 1, 9, 22, 30])
// console.log("result ", result)



// === Reverse an array ==

// 1- check if array is empty or not 
// 2- start from the end and stop at the start 
// 3- return resultant array 


// function reverseArray(array){
//     let reverse = []
//     if(!array.length){
//         return reverse
//     }
//     else{
//         for(let i= array.length -1 ; i>=0 ; i--){
//             reverse.push(array[i])
//         }
//     }
//     return reverse
// }

// const resultt = reverseArray([4,5,6,7,8,9])
// console.log("Reverse Array : ", resultt)


//  ============ SQUARED ARRAY RESULT =========



// function squaredArrayAlgo(array){
//     let startPinter = 0;
//     let newarray = [array.length]
//     let endPointer = array.length -1 

//     for(let i=array.length-1; i>=0 ;i--){
//         let startSquared = array[startPinter] ** 2
//         let endSquared = array[endPointer] ** 2

//         if(endSquared > startSquared){
//             newarray[i] = endSquared
//             endPointer--
//         }else{
//             newarray[i] = startSquared
//             startPinter++
//         }
//     }
//     return newarray
// }


// const result = squaredArrayAlgo([-3, -2, -1, 1,5, 6, 8])
// console.log("check result now", result)


// ========== COMPETITION OF TWO TEAMS WINNER AND RESULT ==========


// function findwinner(competitons, results){

//     const hashmap = {}
//     for(let i=0;i<competitons.length;i++){
//         const resultidx = results[i] === 0 ? 1 : 0

//         const winner = (competitons[i][resultidx])

//         if(hashmap[winner]){
//             hashmap[winner] += 3
//         }else{
//             hashmap[winner] = 3
//         }
//     }

//     let winner = Object.keys(hashmap)[0]
//     let keys = Object.keys(hashmap)

//     keys.forEach((comp)=>{
//         if(hashmap[comp] > hashmap[winner]){
//             console.log("check inside =", comp)
//             winner = comp
//         }
//     })

//     console.log("check in the object ", hashmap)
//     console.log('winnner', winner)

// }



// const competitions =  [
//     ["HTML", "Java"],
//     ["Java", "Python"],
//     ["Python", "HTML"],
//     ["C#", "Python"],
//     ["Java", "C#"],
//     ["C#", "HTML"]
//       ]
  

//   const results =[0, 1, 1, 1, 0, 1]


// findwinner(competitions, results)


// ================== FInd the Lowest change you can give ============

// function LowestChange(coins){

//     if(!coins.length) return 1
//     let sorted = coins.sort((a,b) => a-b)
//     let change = 0;
//     for(let i=0;i<sorted.length;i++){
//         if(change+1 < sorted[i]){
//             return change+1
//         }
//         else{
//             change += sorted[i]
//         }
//     }

//     return change +1 

// }


// const result = LowestChange([2])
// console.log('result :', result)






// ==================================== Linked List ALGO EXPERT Practise  =====================

// class linkedListBro {
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
//             next:null, 
//         }
//     }

//     getPreviousNode(length){
//         let currentnode = this.head
//         for(let i=0;i<=length;i++){
//             currentnode = currentnode.next
//         }
//         return currentnode
//     }


//     removeDublicate(){
//         let previousNode = null
//         let flag = false
//         let hashtable = {}
//         let count = 0;
//         let currentNode = this.head
        
//         while(currentNode != null){
//             if(hashtable[currentNode.value]){
//                 if(!flag){
//                     console.log('checking running at ')
//                     console.log('check count ', count)
//                     previousNode = this.getPreviousNode(count - 1)
//                     console.log('prev', previousNode)
//                     flag = true
//                 }
//             }else{
//                 if(flag){
//                     console.log('===')
//                     hashtable[currentNode.value]= true
//                     previousNode.next = currentNode
//                     console.log('prev now ', previousNode)
//                     flag = false
//                     console.log('ceck flag ===== ', flag)
//                 }else{
//                     console.log('added first time')
//                     hashtable[currentNode.value]= true
//                 }
//             }
//             console.log('hashmap', hashtable)
//             currentNode = currentNode.next
//             count ++
//         }
//         console.log("check linkedliast ", this.head)
//         this.print()
//     }




//     add(value){
//         const newNode = this.newNode(value)
//         this.tail.next = newNode;
//         this.tail = newNode
//     }


//     secondmethod(){
//         let currentNode = this.head
//         while(currentNode!=null){
//             while(currentNode && currentNode.value === currentNode?.next?.value){
//                 let temp = currentNode.next.next
//                 currentNode.next = temp
//             }
//             currentNode = currentNode.next
//         }
//         this.print()
//     }


//     print(){
//         const array = []
//         let currentNode = this.head
//         while(currentNode != null){
//             array.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         console.log('LinkedList : ', array)
//     }


// }


// const obj = new linkedListBro(1)
// obj.add(1)
// obj.add(1)
// obj.add(2)
// obj.add(2)
// obj.add(2)
// obj.add(3)
// obj.add(3)
// obj.add(3)

// //  obj.removeDublicate()
// obj.print()
// obj.secondmethod()





// ============================ DOUBLE LINKEDLIST AlgoExpert ===========================

class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.

      this.insertBefore(this.head, node)

    }
  
    setTail(node) {
      // Write your code here.
      this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {

      // Write your code here.   

    
    let currentNode = this.head

    while(currentNode != null){
        if(currentNode.value === node.value){
            let temp = currentNode.prev
            temp.next = currentNode.next
            currentNode.next.prev = temp
        }else{
            return 
        }
    }

    while(currentNode != null){
        if(node === this.head ){
            this.head.prev = nodeToInsert
            nodeToInsert.next = this.head
            this.head = nodeToInsert
            return
        }
        if(currentNode.value === node.value){
            let previous = currentNode.previous
            previous.next = nodeToInsert
            nodeToInsert.previous = previous
            nodeToInsert.next = currentNode
        }
        currentNode = currentNode.next
    }
}
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.

      if(node.next === null){
        node.next = nodeToInsert
        nodeToInsert.prev = node
        nodeToInsert.next = null
      }else{
        let temp = node.next
        node.next = nodeToInsert
        nodeToInsert.prev = node
        nodeToInsert.next = temp
      }


    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
      let count = 1;
      let currentNode = this.head
      while(currentNode != null){
       
        if(count === position){
            let temp = currentNode.prev
            temp.next = nodeToInsert
            nodeToInsert.prev = temp
            nodeToInsert.next = currentNode
            currentNode.prev = nodeToInsert
            return
        }

        currentNode = currentNode.next
        count++
      }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
      let currentNode = this.head
      while(currentNode != null){
        if(currentNode.value === value){
            if(currentNode.next === null){
                this.tail = currentNode.prev
                this.tail.next = null
            }

            if(currentNode.prev === null){
                this.head = currentNode.next
                this.head.prev = null
            }

            let temp = currentNode.prev
            temp.next = currentNode.next
            currentNode.next.prev = temp
        }
      }
      return null
    }
  
    remove(node) {
      // Write your code here.
    if(node.next === null){
        this.tail = node.prev
        this.tail.next = null
    }else{
        node.next.prev = node.prev
    }

    if(node.prev === null){
        this.head = node.next
        this.head.prev = null
    }else{
        node.prev.next = node.next
    }

    node.prev = null
    node.next = null
    
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
      let currentNode = this.head
      while(currentNode != null){
        if(currentNode.value === value)
        return true
      }
      return false
    }
  }



  

  
















createServer.listen(PORT, () => `Listening to the Port ${PORT}`)





