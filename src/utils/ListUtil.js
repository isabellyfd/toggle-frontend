export function transformListIntoTupleList(list) {
    const tupleList = []
        for (var i = 0; i < list.length; i += 2){
            const item = [list[i], list[i+1]]
            tupleList.push(item);
            if (i + 2 > list.length) {
                i--;
            }
        }
    return tupleList;
}