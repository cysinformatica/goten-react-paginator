export const getFakeResponse = (offset, limit) => {
    let elements = []
    for(let i=0; i < limit; i++) {
        elements[i] = "Item" + (i + offset + 1)
    }
    return {
        elements: elements,
        total: 35,
        offset: offset,
        limit: limit
    }
}