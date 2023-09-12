import { create } from "zustand";
import { useSession } from "next-auth/react";

type State = {
  apiResponse: any;
  setApiResponse: (apiResponse: any) => void;
};

export const useStore = create<State>((set) => ({
  apiResponse: null,
  setApiResponse: (apiResponse) => set({ apiResponse }),
}));
