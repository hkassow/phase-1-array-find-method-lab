// code your solution here
function superbowlWin(record){
    let winningElement = record.find(element => element.result === 'W');
    if (!!winningElement) {
        return winningElement.year;
    }
    else {
        return undefined;
    }
    
}