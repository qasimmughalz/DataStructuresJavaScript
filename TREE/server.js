
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
        let currNode = this.root
        let targetNode = this.root;
        while (currNode.right != null && currNode.left != null) {
            if (value < currNode.value) {
                currNode = currNode.left
                targetNode = currNode
            }
            else {
                currNode = currNode.right
                targetNode = currNode
            }
        }
        if (value > targetNode.value) {
            targetNode.right = node
        } else {
            targetNode.left = node
        }

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

mytree.insert(14)
mytree.insert(16)
mytree.insert(9)
mytree.insert(13)

console.log(JSON.stringify(traverse(mytree.root)))


createServer.listen(PORT, () => `Listening to the Port ${PORT}`)