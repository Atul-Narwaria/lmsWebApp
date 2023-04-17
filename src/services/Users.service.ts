import InstanceMainApp from "../instance"

const Getusers =async () => {
       try{
        let get =  await InstanceMainApp.get('/users')
        return get.data
       }catch(e:any){
        return {status:false,message:e.message}
       }
       
}

export {
    Getusers
}