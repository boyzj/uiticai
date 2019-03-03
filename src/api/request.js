import axios from 'axios';
axios.defaults.withCredentials = false
import querystring from 'querystring';
//  https://parking.meishifulu.cn/bakend/Parking/userpageQuery?t=1528180208086
//let apIurl = 'http://172.16.8.197:8083/api';
let config = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}
   
  let  pp = '/api/v1/';   //测试
  //       let  pp = '/app'; 
export const getRequest = async(param,url) => {
  let res = null;
  res = await axios.get(pp+url,{params:param});
  return res.data;
};

export const Request = async(params, url) => {
     
  let res= null;
  if(url =='/login'){
    sessionStorage.removeItem('token')
  res = await axios.post(pp+url,params);  
  }else{
    axios.defaults.headers.common['token'] = sessionStorage.getItem('token') || '';
     res = await axios.post(pp+url,params,config);  
  }
   return res.data;
 };
