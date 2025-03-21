"use client"

import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthType {
    userData: string | null;
    setUserData: React.Dispatch<React.SetStateAction<string | null>>;
}

interface AuthContextProviderProps {
    children: ReactNode;
  }

export const AuthContext = createContext<AuthType | null>(null);

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider:React.FC<AuthContextProviderProps> = ({children}) => {

    const [userData, setUserData] = useState<string | null>(null)
    const baseUrl = "http://localhost:3212";

    useEffect(() => {
        const validResponse = async () => {
            try {
                const response = await axios.get(`${baseUrl}/auth/validate`,{
                    withCredentials:true,
                })
        
                if (!response?.data || !response?.data?.success) {
                    setUserData(null);
                    return;
                  }
        
                if (response?.data?.success) {
                    setUserData(response?.data?.user)
                }
        
            } catch (error) {
                if (error instanceof axios.AxiosError) {
                  console.log  (
                       error?.response?.data
                     );
                   } else {
                   console.log("reg error => ", error);
                   }
            }  
        }
        validResponse()
            },[])

 return (
        <AuthContext.Provider value={{userData, setUserData}}>
        {children}
        </AuthContext.Provider>
    );
    
   
}