import { MICROSERVICES } from "@/constants";
import type { AddUserRequest } from "@/types";
import axios from "axios";

export const addUser=async(payload: AddUserRequest)=>{
    const response = await axios.post(MICROSERVICES.USER + "/", payload);
    return response;
}