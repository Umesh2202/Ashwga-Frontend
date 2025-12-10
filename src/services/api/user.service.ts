import { MICROSERVICES } from "@/constants";
import type { AddUserRequest, LoginUserRequest } from "@/types";
import axios from "axios";

export const addUser=async(payload: AddUserRequest)=>{
    const response = await axios.post(MICROSERVICES.USER + "/", payload);
    return response;
}

export const loginUser=async(payload: LoginUserRequest)=>{
    const response = await axios.post(MICROSERVICES.USER + "/login", payload);
    return response;
}