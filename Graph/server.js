
const http = require('http')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()


// Steps 
// user will send info two connect two verteces , example (3,4)
// so i have to check if the given verteces are avail or not   !this.list[val1]
// first check done 
// if vertex is available then , push the second edge in first values vertex  
// and then push the first vallue in second values vertex 






class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList={}
    }
    addvertex(value){
        if(!this.adjacentList.value){
            this.adjacentList[value] = []
        }
        console.log("this", this.adjacentList)
    }

    addEdge(node1, node2){
        if(!this.adjacentList[node1] || !this.adjacentList[node2]){
            console.log("No Node Found with this Vertex")
            return
        }
        if(this.adjacentList[node1]){
            this.adjacentList[node1].push(node2)
            this.adjacentList[node2].push(node1)
        }
       
        console.log("Graph ", this.adjacentList)
    }
}

const myGraph = new Graph()
myGraph.addvertex('0')
myGraph.addvertex('1')
myGraph.addvertex('2')
myGraph.addvertex('3')
myGraph.addvertex('4')
myGraph.addvertex('5')
myGraph.addvertex('6')

myGraph.addEdge('3','1')
myGraph.addEdge('3','4')
myGraph.addEdge('4','2')
myGraph.addEdge('4','5')
myGraph.addEdge('1','2')
myGraph.addEdge('1','0')
myGraph.addEdge('0','2')
myGraph.addEdge('6','5')



createServer.listen(PORT, () => `Listening to the Port ${PORT}`)