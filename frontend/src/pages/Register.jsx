// import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetLoginUserMutation, useGetRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"


const Register = () => {
    const [sigupInput, setSingupInput] = useState({
        name: "",
        email: "",
        password: ""

    })
    const [loginInput, setLoginInput] = useState({

        email: "",
        password: ""

    })
    const [getRegisterUser, { data:
         registerData, error:
          registerError, isLoading: 
          registerIsLoading, isSuccess: 
          registerIsSuccess }] = useGetRegisterUserMutation();
        
          
    const [getLoginUser, { data:
         loginData, error:
          loginError, isLoading:
           loginIsLoading,
            isSuccess: loginIsSuccess
         }] = useGetLoginUserMutation();
    
    const updateChangeHandler = (e, type) => {
        const { name, value } = e.target

        if (type === "signup") {
            setSingupInput({ ...sigupInput, [name]: value })

        }
        else {
            setLoginInput({ ...loginInput, [name]: value })
        }

    }
    const getUserData =  async (type) => {
        const getUser = type === "signup" ? sigupInput : loginInput
        const action = type ===  "signup" ? getRegisterUser : getLoginUser
        await action(getUser)
        console.log(getUser);

    }
    useEffect(() => {
        // Handle signup success
        if (registerData) {
            toast.success(registerData.message || "Signup Successful");
        }
        if (registerError) {
            toast.error(registerError?. data?.message || "Signup  failed");
        }
    
        // Handle login success
        if (loginData) {
            toast.success(loginData.message || "Login Successful");
        }
        if (loginError) {
            toast.error(loginError?.data?.message || "Login failed");
        }
    
    }, [loginData, registerData, loginError, registerError,  loginIsLoading , registerIsLoading]);
    
    
    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Signup">SignUp</TabsTrigger>
                    <TabsTrigger value="Login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="Signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">
                                    Name
                                </Label>

                                <Input type="text"
                                    name="name"
                                    value={sigupInput.name}
                                    onChange={(e) => updateChangeHandler(e, "signup")}
                                    placeholder="enter your name here.."
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email"
                                    name="email"
                                    value={sigupInput.email}
                                    onChange={(e) => updateChangeHandler(e, "signup")}
                                    placeholder="enter your email.."
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Password</Label>
                                <Input type="password"
                                    name="password"
                                    value={sigupInput.password}
                                    onChange={(e) => updateChangeHandler(e, "signup")}
                                    placeholder="enter your password.."
                                    required="true" />
      </div>
 </CardContent>
     <CardFooter className=" flex justify-center items-center w-full">
                            <Button className="text-center flex justify-center w-full" onClick={() => getUserData("signup")}>
                            {
                                    registerIsLoading ? (
                                        <> 

                                        <Loader2 className=" mr-2 h-4 w-4 animate-spin "/> Please wait
                                        </>
                                    ) :
                                    "SignUp"
                                     
                                    
                                }

                                </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email"
                                    name="email"
                                    value={loginInput.email}
                                    onChange={(e) => updateChangeHandler(e, "login")}
                                    placeholder="enter your email.."
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Password</Label>
                                <Input type="password"
                                    name="password"
                                    value={loginInput.password}
                                    onChange={(e) => updateChangeHandler(e, "login")}
                                    placeholder="enter your password.."
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter className=" flex justify-center items-center w-full">
                            <Button disabled={loginIsLoading} className="text-center flex justify-center w-full" onClick={() => getUserData("login")}>
                                {
                                    loginIsLoading ? (
                                        <> 

                                        <Loader2 className=" mr-2 h-4 w-4 animate-spin "/> Please wait
                                        </>
                                    ) :
                                    "Login"
                                     
                                    
                                }
                                </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Register
