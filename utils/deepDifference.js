export default (first, second) => [...difference(first, second), ...difference(second, first)];

const difference = (first, second) => {
    let difference = [];
    for(let i=0;i<first.length;i++){
        let found = false;
        for(let j=0;j<second.length;j++){
            if(innerDifference(first[i], second[j])){
                found = true;
                break;
            }
        }
        if(!found) difference.push(first);
    }
    return difference;
};

const innerDifference = (first, second) => {
    for(let i=0;i<first.length;i++){
        if(first[i] === second[i]) return true;
    }
    return false;
};