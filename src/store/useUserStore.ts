import type { AddUserRequest } from '@/types';
import { create } from 'zustand';

interface UserActions {
    setUserDetails: (userDetails: AddUserRequest) => void;
    reset: () => void;
}

type UserStore = AddUserRequest & UserActions;

const initialState: AddUserRequest = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUserDetails: (userDetails: AddUserRequest) => set({ ...userDetails }),
  reset: () => set(initialState),
}));

export default useUserStore;