
const http = require('http')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()


// Steps

//  1- When Firs node is added it will be our head node 
// 2- We somehow need to traverse and moveon the next step , but we also have to keep the last node PointerEvent, so that when ever we are adding new node, we can have the last one and then rplace that , and this way it will go next next and next 



// Right now we have the last value in our tail, so we will smply change the tale 



class LinkedList{
    constructor(value){
       this.head = {
        value : value ,
        next : null
       }
       this.tail = this.head
       this.length= 1
    }

    append(value){
        let node = {
            value: value, 
            next:null
        }
        this.tail.next = node
        this.tail = node
        this.length++
        return this.head
    }

    prepend(value){
        let node = {
            value: value, 
            next:null
        }
        node.next = this.head
        this.head = node
        this.length++
    }

    insert(index, value){
        let node = {
            value: value, 
            next:null
        }
        if(index == 0){
            this.prepend(value)
            return
        }
        let prevNode;
        let currentNode = this.head
        for(let i=0;i<index; i++){
            prevNode = currentNode
            currentNode = currentNode.next
        }
         prevNode.next = node
         node.next = currentNode
         this.length++
    }

    delete(value){
        let preNode;
        let currentNode = this.head
        while(currentNode != null){
            if(currentNode.next.value === value){
                preNode = currentNode
                preNode.next = currentNode.next
                delete currentNode;
                this.length--
                return
            }
            currentNode = currentNode.next
        }
        console.log("check", preNode, currentNode)
    }

     printValues(){
       const arr = []
       let currentNode = this.head
       while(currentNode !== null){
            arr.push(currentNode.value)
            currentNode = currentNode.next
       }
       console.log("List : ", arr)
       console.log("LinkedList : ", this.head)
    }

}

const mylink = new LinkedList(5)

mylink.append(10)

mylink.delete(10)

mylink.printValues()
















createServer.listen( PORT , ()=> `Listening to the Port ${PORT}`)