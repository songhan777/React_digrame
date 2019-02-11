import axios from 'axios';
//'http://159.226.245.243:3000/apizn'

axios.defaults.baseURL =  'http://localhost';
axios.defaults.withCredentials = true; //允许跨域携带cookie
axios.interceptors.response.use((res) => {
    return res.data
})
export let getList = () => { //获取任务列表
    return axios.get("http://rap2api.taobao.org/app/mock/data/708820");
};
export let postList = (data) => { //获取编辑工作流页面的详细信息
    return axios.post("http://rap2api.taobao.org/app/mock/data/708820", data);
}
export let takeSearch = (data) => {
    return axios.post("/serch", data);
}

