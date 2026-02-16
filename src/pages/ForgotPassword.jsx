import React from "react";
import { useState } from "react";
import { Button, Form, Input,Alert  } from "antd";
import { useResetPasswordMutation } from "../components/auth/services/authApi";

const ForgotPassword = () => {

  const [form]=Form.useForm()
  const [resetPassword]=useResetPasswordMutation()
    let [ message,setMessage]=useState(null)
    let [error,setError]=useState(null)
    let [loading,setLoading]=useState(false)

       let handleSubmit=async({email})=>{
            setMessage(null)
            setLoading(true)
            setError(null)
    
            try {
                let res=await resetPassword(email)
                
                //if any error  in register the user
                if(res.error) throw new Error(res.error.message)
                setMessage("reset password link sent to the mail")
              form.resetFields() //to clear formfields after link is send
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
    
  return (
    <div className='container my-3 p-3  rounded shadow' style={{background:"rgba(240, 240, 240, 0.9)"}}>
      {error &&  <Alert message={error} type="error" />}
      {message &&  <Alert message={message} type="success" />}
        <Form layout={"vertical"}  form={form} onFinish={handleSubmit} initialValues={{email:""}} >
           {error &&  <Alert message={error.message} type="error" />}
          {message &&  <Alert message={message} type="success" />}
        <Form.Item label="Email" name="email" rules={[{required:true,message:"please enter your email"}]} >
            <Input placeholder="enter your email"  autoComplete={'off'}/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType='submit' block loading={loading}>Send reset mail</Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default ForgotPassword