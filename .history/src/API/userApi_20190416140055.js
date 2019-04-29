export let getList = () => { //获取任务列表
    return axios.get("/list");
};