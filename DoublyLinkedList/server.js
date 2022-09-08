
const http = require('http')
const { isTypedArray } = require('util/types')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()


// Steps

// 1- We whenever a noed is created it will have a next and prev pointer 
// 2- we will have one head that will be the starting point of the array and one that will hold the last value of the linked list 
// 3- At first we will assign the tail equal to the head node , so that we can traverse from this point and as new nodes come in we make new nodes as the tail , so second node now beome tale and then 3rd become tail and then 4rth become tail and we can simply add like this.
// 4- when we are setting the new node as tail node -> we will also set our previous node for that tail node and next to be null and like this we will keep on moving


// append -> we will take the , this.tail.next = newnode -> tail.prev= tail , tail = newnode
// prepend -> new node -> node.prev = null | node.next -> this.head | this.head.prev = node | this.head = node 


class DoubleLinkedList{
    constructor(){
        this.head={
            value: value, 
            next:null, 
            prev:null
        }
    }

    
}


const myList = new DoubleLinkedList(10)

console.log(myList.head)



createServer.listen( PORT , ()=> `Listening to the Port ${PORT}`)