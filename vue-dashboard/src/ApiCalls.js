/* 
    Single module file for outgoing API calls
*/

export let ApiCalls = {};

ApiCalls.getBoards = async () => {

    let res = await fetch('/api/boards');
    let json = await res.json()

    return json.boards
}

// fetch tiles for board
// board structure, not tile datasets
ApiCalls.getBoardData = async (slug) => {

    let res = await fetch('/api/board/'+slug);
    let json = await res.json()

    return json
}

// apply structure on how we recieve datasets
ApiCalls.getChart = async (id) => {

    let res = await fetch('/api/chart/'+id);
    let json = await res.json()

    return json
}