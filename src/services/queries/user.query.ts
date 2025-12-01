import { useMutation } from "@tanstack/react-query";
import type { AddUserRequest } from "@/types";
import { addUser } from "@/services/api";

export const useAddUserMutation=()=>{
    return useMutation({
        mutationKey: ['addUser'], 
        mutationFn: async (body: AddUserRequest) => {
        const res = await addUser(body);
        return res;
    },
  });
}