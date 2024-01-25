import axios from "axios"
import {create} from "zustand"


type userStateProp = {

    _id:string,
    username:string,
    email:string,
    loading:boolean,
    success:boolean,
    error: boolean,
    error_message: string
}
const  initialuserState:userStateProp = {
    _id:"",
    username:"",
    email:"",
    loading:false,
    success:false,
    error:false,
    error_message:""
}

export const useGetUser = create((set, get)=>({
    ...initialuserState,
    getprofile: async ()=>{
        set({...initialuserState, loading:true})
        try{
            const user = await axios.get("http://localhost:9000/auth/profile")
            set({...initialuserState, ...user.data, success:true})
        }
        catch(error:any){
            set({...initialuserState, error:true, error_message:`${error.message}` ,success:false})
        }
        finally{
            set({...initialuserState, loading:false })
        }
    }
}))




