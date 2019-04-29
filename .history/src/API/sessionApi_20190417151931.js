import axios from 'axios';
export let postSession = (data) => { //获取任务列表
    return axios.post("/session",data);
};