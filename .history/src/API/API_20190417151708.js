import axios from 'axios';
//'http://159.226.245.243:3000/apizn'

if (DEV) {
    axios.defaults.baseURL =  'http://localhost:3000';
} else {
    axios.defaults.baseURL = 'http://flow.dv.ailab.win'
}

axios.defaults.withCredentials = true; //允许跨域携带cookie
axios.interceptors.response.use((res) => {
    return res.data
})
export {getOAuthJson} from './userApi'
export let getList = () => { //获取任务列表
    return axios.get("/list");
};
export let postList = (data) => { //获取编辑工作流页面的详细信息
    return axios.post("http://rap2api.taobao.org/app/mock/data/708820", data);
}
export let takeSearch = (data) => {
    return axios.post("/serch", data);
};
export let getWorkList = (data) => { //获取工作列表
    return axios.post("/work",data);
};
export let RecentlyWorkList = (data) => { //获取最近工作列表
    return axios.post("/recentlyWork",data);
};
export let getTeamList = (data) => { //获取队伍的参数
    return axios.get("/team",data);
};
export let pushPersonalInformation = (data) => { //个人设置往服务器推送上去，
    return axios.post("/work/pushPersonal",data);
};
export let getSearchTeam = (data) => { //获取搜索队伍的参数，
    return axios.post("/work/searchTeam",data);
};
export let searchMemberTeam = (data) => { //获取搜索队伍的参数，
    return axios.post("/work/searchMember",data);
};
export let recentlyMemberTeam = (data) => { //获取最近合作者，
    return axios.post("/work/recentlyMember",data);
};
export let pushTeam = (data) => { //增加工作队伍，
    return axios.post("/work/pushTeam",data);
};
export let pushMember = (data) => { //增加合作者队伍，
    return axios.post("/work/pushMember",data);
};
export let  registeredUser= (data) => { //增加合作者队伍，
    return axios.post("/registeredUser",data);
};
export let  retrievePassword= (data) => { //找回密码，
    return axios.post("/retrievePassword",data);
};
export let  getValidation= (data) => { //验证码
    return axios.post("/getValidation",data);
};
export let  checkoutValidation= (data) => { //校验验证码
    return axios.post("/checkoutValidation",data);
};
export let  getDataSet= (data) => { //数据集数据获取
    return axios.post("/getDataSet",data);
};
export let  getDataSetDatabase= (data) => { //数据集服务器获取
    return axios.post("/getDataSetDatabase",data);
};
export let  uploadDataSet= (data) => { //将服务器上传到数据集
    return axios.post("/uploadDataSet",data);
};
export let  LocalUpload= (data) => { //将本地数据上传到数据集
    return axios.post("/LocalUpload",data);
};
export let  VerifyOldPassword= (data) => { //验证当前用户的旧密码
    return axios.post("/VerifyOldPassword",data);
};
export let nowPassword= (data) => { //修改当前账号密码
    return axios.post("/nowPassword",data);
};
export let handleTeamList= (data) => { //修改团队信息
    return axios.post("/handleTeamList",data);
};
export let removeTeamList= (data) => { //删除团队信息
    return axios.post("/removeTeamList",data);
};
export let handleMemberList= (data) => { //修改合作者信息
    return axios.post("/handleMemberList",data);
};
export let removeMemberList= (data) => { //删除合作者信息
    return axios.post("/removeMemberList",data);
};
export let getProjectData= (data) => { //获取项目详情
    return axios.post("/getProjectData",data);
};
