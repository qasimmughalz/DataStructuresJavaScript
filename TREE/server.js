
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
        console.log("check tail", currNode)
        while (currNode != null) {
            arr.push(currNode.value)
            currNode = currNode.right
        }
        console.log("Printing:", arr)
    }
}

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null :
        traverse(node.left)
    tree.right = node.right === null ? null :
        traverse(node.right)
    return tree
}


let mytree = new BST(10)
mytree.insert(8)
mytree.insert(12)
mytree.insert(15)
mytree.insert(11)

mytree.insert(13)
mytree.insert(16)
mytree.insert(9)
mytree.insert(14)


mytree.lookup(15)

console.log(JSON.stringify(traverse(mytree.root)))


createServer.listen(PORT, () => `Listening to the Port ${PORT}`)