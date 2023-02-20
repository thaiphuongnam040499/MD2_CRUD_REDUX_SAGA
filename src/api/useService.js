import { instance } from "./axios";
export const USER_GET = async()=>{
    console.log("step3: useService thực hiện gọi api get của json server");
    let response = await instance.get('users');
    console.log("step4: useService nhận kết quả từ api, listUser",response.data);
    return response.data
}
export const USER_POST = async(newUser)=>{
    let response = await instance.get('users',newUser);
    return response.data
}
export const USER_DELETE = async(id)=>{
    let response = await instance.get('users/'+id);
    return response.data
}
export const USER_PUT = async(updateUser)=>{
    let response = await instance.get('users/'+updateUser.id,updateUser);
    return response.data
}
export const USER_PATCH = async(updateUser)=>{
    let response = await instance.get('users/'+updateUser.id,updateUser);
    return response.data
}
