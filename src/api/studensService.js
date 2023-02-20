import { instance } from "./axios";
export const STUDENT_GET = async()=>{
    console.log("step3: studentService thực hiện gọi api get của json server");
    let response = await instance.get('students')
    console.log("step4: useService nhận kết quả từ api, listStudent",response.data);
    return response.data
}