var counts = []

module.exports = {
    get : (userId)=>{
        return counts.find(i=>i.userId===userId);
    },
    getNext : (userId)=>{
        let count = JSON.parse(JSON.stringify(counts.find(i=>i.userId===userId)));      
        return nextCount(count);
    },
    increment : (userId)=>{
        counts[counts.indexOf(counts.find(i=>i.userId===userId))]=nextCount(counts.find(i=>i.userId===userId));
        return counts.find(i=>i.userId===userId);
    },
    save : (count)=>{
        counts.push(count);
    }

}

function nextCount(count){
    count.number = (count.number<1)?1:count.number*2;
    return count;
}