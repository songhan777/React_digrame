/**
 * 创建工作流的 模板ID
 */
function createStreamId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 *  注册时生成唯一的tokenID
 */
function createTokenId () {
    return 'xxxxxxxxxxxxxxxx'.replace(/x/g, c => {
        const r = (Math.random() * 16) | 0;
        return r.toString(16) 
    })

}

function copyTableToSession (req, tableData) {
    for () 
}

module.exports = {
    createStreamId,
    createTokenId
}
