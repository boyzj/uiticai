///import axios from 'axios';
// axios.defaults.withCredentials = false

 import {Request,getRequest} from './request'
 
let base = '';

export const orderFootList = (params) => getRequest(params,'match/top/lst');
export const getCode = (params) => getRequest(params,'common/validation/verification_code'); //注册码
export const login = (params) => getRequest(params,'user/account/login');  //登陆 
export const regist = (params) => Request(params,'user/account/register');  //注册 
export const loginOut = (params) => Request(params,'user/account/logout');  //登出

export const index = (params) => Request(params,'/Index/index');  //首页 
export const OrderInfo = (params) => Request(params,'/Order/gdOrderInfo');

export const hotWord = (params) => Request(params,'/Index/hotSearch');

export const findpassword = (params) => Request(params,'/Login/verifyPhone');  
 
export const send = (params) => Request(params,'/Sms/send');  
export const modifyPassword = (params) => Request(params,'/user/modifyPassword');  

export const shopAdress = (params) => Request(params,'/Index/shopAdress');  // 获取收获地址

export const addGoodsApply = (params) => Request(params,'/Index/addGoodsApply'); //物资
export const shopGoodsApply = (params) => Request(params,'/Index/shopGoodsApply');
export const goodsApply = (params) => Request(params,'/Index/goodsApply');
export const goodsApplyInfo = (params) => Request(params,'/Index/goodsApplyInfo');

export const topicList = (params) => Request(params,'/Article/topicList');   //专题
export const topicInfo = (params) => Request(params,'/Article/topicInfo');   

export const goodType = (params) => Request(params,'/Category/select');      //商品
export const goodList = (params) => Request(params,'/Index/goodsList');  
export const goodInfo = (params) => Request(params,'/Index/goodsInfo'); 
export const goodSpec = (params) => Request(params,'/Cart/getGoodSpec');  

 export const addCart = (params) => Request(params,'/Cart/addCart');  //购物车 
 export const CartItems = (params) => Request(params,'/Cart/lists');
 export const changeNum = (params) => Request(params,'/Cart/changeNum');
 export const delCart = (params) => Request(params,'/Cart/delCart');

 export const userInfo = (params) => Request(params,'/Index/myPage');   //user
 export const multiUploadFile = (params,config) => Request(params,'/upload/uploadFile');  //单图
 export const multiUploadFiles = (params,config) => Request(params,'/upload/multiUploadFile');  //多图
 export const editUserHead = (params) => Request(params,'/User/editUserHead');   

 export const sureOrder = (params) => Request(params,'/Cart/confirmOrderList');  //订单
 export const createOrder = (params) => Request(params,'/Order/createOrder');  //创建订单 
 export const OrderList = (params) => Request(params,'/Order/gdOrderList');
 export const shopOrderList  = (params) => Request(params,'/Order/shopOrderList ');

 export const gettel = (params) => Request(params,'/Goods/site');
 export const delOrder = (params) => Request(params,'/Goods/delOrder');
 export const orderDoen = (params) => Request(params,'/Order/deliver');
 export const verifyOrder = (params) => Request(params,'/Order/verifyOrder');  //订单审核 1    物资申请审核 2
 export const confirm = (params) => Request(params,'/Order/confirm');     //接单
 export const approval = (params) => Request(params,'/Order/approval');    // 审核 shop
 export const treasury = (params) => Request(params,'/Order/treasury');     //出库

 //export const topicInfo = (params) => Request(params,'/Article/topicInfo');  // 专题

 export const Settlement = (params) => getRequest(params,'/Settlement/find');  //结算
 export const SettlementInfo = (params) => getRequest(params,'/Settlement/info');
 export const SettlementApproval = (params) => Request(params,'/Settlement/approval'); //结算审核

 
 export const chartInfo = (params) => Request(params,'/History/statistic');   // 报表信息
 export const chatOnline = (params) => Request(params,'/Goods/chatOnline'); // 在线咨询
 export const chatDetail = (params) => Request(params,'/Goods/chatDetail');


 export const message = (params) => Request(params,'/Index/message');  //nwes
 export const messageList = (params) => Request(params,'/Article/messageList');
 export const messageInfo = (params) => Request(params,'/Article/messageInfo');