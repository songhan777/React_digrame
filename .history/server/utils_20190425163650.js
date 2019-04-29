function createStreamId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function createTokenId () {
    return 'xxxxxxxxxxxxxxxx'.replace(/x/g, c => {
        const r = (Math.random() * 16) | 0;
        return r.toString(16) 
    })

}

module.exports = {
    createOwnId,
}
