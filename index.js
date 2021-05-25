function superbowlWin(record){
function callback(element, index, array){
    return(element.result === "W")
}
   
const winningObject = record.find(callback)
if (winningObject){
    return winningObject.year
} else{return undefined}
}

//
