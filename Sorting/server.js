
const http = require('http')
const { off } = require('process')
const PORT = process.env.PORT || 8000
const createServer = http.createServer()


// ========== BUBLLE SORT ==========


// let myarray = [1,47,8,74,2,68]


// for(let i=0;i<myarray.length;i++){
//     for(let j=0; j< myarray.length ; j++ ){
//         if(myarray[j] > myarray[j+1]){
//             let temp = myarray[j]
//             myarray[j]= myarray[j+1]
//             myarray[j+1]= temp
//             console.log("I AND J ", i , j)
//             console.log("Myarray", myarray)
//         }
//     }
// }


// console.log("Final Array =", myarray)





// ================ SELECTION SORT ==============



// const arr = [557,5,3,9,21,2]


// for(let i=0; i<arr.length; i++){
//     let min = arr[i]
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] > min){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log("check arr ",arr)


// =============== INSERTIONS ORT BRO ========

// const arr = [2,8,3,5,6,1,4]


// for(let i=0; i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             let target = arr[j+1]
//             for(let k=0;k<arr[j+1];k++){
//                 if(arr[k] > target){
//                     console.log("check", arr)
//                     arr.splice(arr[k], 0, target)
//                     return
//                 }
//             }
//         }
//     }
// }

// console.log("New Arr", arr)


// const blocks = [
//     {
//         gym:false, 
//         school: true, 
//         store:false
//     },
//     {
//         gym:true, 
//         school: false, 
//         store:false
//     },
//     {
//         gym:true, 
//         school: true, 
//         store:false
//     },
//     {
//         gym:false, 
//         school: true, 
//         store:true
//     },
//     {
//         gym:false, 
//         school: true, 
//         store:false
//     }
    
// ]

// const req = ['gym', 'school', 'store']


// console.log("my blocks length ", blocks.length)
// let arr = []

// for(let s=0;s<blocks.length;s++){
//     let obj = { gym:0,school:0,store:0 }
//     if(blocks[s].gym){
//         obj.gym=1
//     }
//     if(blocks[s].school){
//         obj.school=1
//     }
//     if(blocks[s].store){
//         obj.store=1
//     }
//     arr.push(obj)
// }

// console.log("Changed array ", arr)

// let temp = []

// for(let i=0;i<blocks.length;i++){
//     for(let j=0;j<blocks.length;j++){
//          if(blocks[j].gym){
//             arr[i].gym +=1
//          }
//          if(blocks[j].school){
//             arr[i].school +=1
//          }
//          if(blocks[j].store){
//             arr[i].store +=1
//          } 
         
         
//     }
//     tempobj = {gym: arr[i].gym , school: arr[i].school, store: arr[i].store}
//     temp[i] = tempobj
// }

// console.log("my arr = ", temp)










createServer.listen(PORT, () => `Listening to the Port ${PORT}`)