 
let array =  ["NORD", "SUD", "EST"]

function dirReduc(arr) {

    let findOpposite = true
    while (findOpposite) {
        findOpposite = false
        for (let index = 0; index < arr.length-1; index++) {

            if ((arr[index] === "NORTH" && arr[index+1] === "SOUTH") ||
                (arr[index] === "SOUTH" && arr[index+1] === "NORTH")  ||
                (arr[index] === "EAST" && arr[index+1] === "WEST") ||
                (arr[index] === "WEST" && arr[index+1] === "EAST")
            ){
              arr.splice(index,2)
              findOpposite = true
              break;
            } 
            }      
    }
    return arr;
}


 console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]))