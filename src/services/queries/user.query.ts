import { useMutation } from "@tanstack/react-query";
import type { AddUserRequest, LoginUserRequest } from "@/types";
import { addUser, loginUser } from "@/services/api";

export const useAddUserMutation=()=>{
    return useMutation({
        mutationKey: ['addUser'], 
        mutationFn: async (body: AddUserRequest) => {
        const res = await addUser(body);
        return res;
    },
  });
}

export const useLoginUserMutation=()=>{
    return useMutation({
        mutationKey: ['loginUser'], 
        mutationFn: async (body: LoginUserRequest) => {
        const res = await loginUser(body);
        return res;
    },
  });
}