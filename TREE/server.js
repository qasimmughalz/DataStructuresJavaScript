
const http = require('http')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()

class BST {
    constructor(value) {
        this.root = {
            value: value,
            right: null,
            left: null
        }

    }

    insert(value) {
        let node = {
            value: value,
            right: null,
            left: null
        }
        // Added Empty Check
        if(this.root == null){
            this.root = node
        }
        let currNode = this.root
        let targetNode = this.root;

        // It works but it will work extra and will take some extra time and space
        while (currNode.right != null && currNode.left != null) {
            if (value < currNode.value) {
                currNode = currNode.left         // if(!currentNode.left){currentNode.left = node}
                targetNode = currNode
            }
            else {
                currNode = currNode.right         // if(!currentNode.right){currentNode.left = node}
                targetNode = currNode
            }
        }
        if (value > targetNode.value) {
            targetNode.right = node              
        } else {
            targetNode.left = node
        }

    }

    lookup(value){
        let currentNode = this.root;
        while(currentNode){                     // while there is a current node which means not null
            if(currentNode.value === value){
                console.log("Found at", currentNode)
                return currentNode
            }
            if(value < currentNode.value){
                currentNode = currentNode.left
            }
            else{
                currentNode = currentNode.right
            }
        }
        return false
    }


    printback() {
        let arr = [];
        let currNode = this.root
        console.log("check tail", currNode)
        while (currNode != null) {
            arr.push(currNode.value)
            currNode = currNode.left
        }
        console.log("Printing:", arr)
    }
    printfor() {
        let arr = [];
        let currNode = this.root
        while (currNode != null) {
            arr.push(currNode.value)
            currNode = currNode.right
        }
        console.log("Printing:", arr)
    }


    breadthFirstSearch(){
        let currentNode = this.root;
        let list = []
        let queue = []

        queue.push(currentNode)
        while(queue.length > 0){
             currentNode = queue.shift()
             list.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        console.log("check BFS =", list)
    }


    breadthFirstSearchR(queue, list){
        if(queue.length === 0){
            console.log("Recursive BFS : ", list )
            return list
        }

        let currentNode = queue.shift()
        list.push(currentNode.value)

            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
            return this.breadthFirstSearchR(queue, list)
    }

    DFSInOrder(node, list){
        return  DFSInorderFunction(node,list)
        // if(node.left){
        //      this.DFSInOrder(node.left, list)
        // }
        // list.push(node.value)
        // if(node.right){
        //      this.DFSInOrder(node.right, list)
        // }
        // console.log('DFS In-Order : ', list)
    }

    DFSpreOrder( node, list){
        return DFSPreOrderF(node, list)
    }

}


function DFSInorderFunction(node, list){
    if(node.left){
         DFSInorderFunction(node.left, list)
    }
    list.push(node.value)
    if(node.right){
         DFSInorderFunction(node.right, list)
    }
    return list
}


function DFSPreOrderF(node, list){
    list.push(node.value)
    if(node.left){
        DFSPreOrderF(node.left, list)
    }
    if(node.right){
        DFSPreOrderF(node.right, list)
    }
    return list;
}


function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null :
        traverse(node.left)
    tree.right = node.right === null ? null :
        traverse(node.right)
    return tree
}


let mytree = new BST(9)
mytree.insert(6)


mytree.insert(20)
mytree.insert(7)
mytree.insert(170)

mytree.insert(15)
mytree.insert(1)



let result = mytree.DFSInOrder(mytree.root, [])
console.log(result)

// mytree.lookup(15)
// mytree.breadthFirstSearch()
// mytree.breadthFirstSearchR([mytree.root], [])

// console.log(JSON.stringify(traverse(mytree.root)))


createServer.listen(PORT, () => `Listening to the Port ${PORT}`)