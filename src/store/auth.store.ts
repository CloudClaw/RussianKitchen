import { Session } from "next-auth";
import { create } from "zustand";
import { TSessionStatus } from "./types";

interface IAuthState {
	isAuth: boolean;
	status: TSessionStatus;
	session: Session | null;
	setAuthState: (status: TSessionStatus, session: Session | null) => void;
}

export const useAuthStore = create<IAuthState>((set) => ({
	isAuth: false,
	status: "unauthenticated",
	session: null,
	setAuthState: (status: TSessionStatus, session: Session | null) =>
		set({
			isAuth: status === "authenticated",
			status,
			session,
		}),
}));
