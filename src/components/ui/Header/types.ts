import { TSessionStatus } from "@/store/types";
import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";

export interface IHeaderLinks {
	href: string;
	label: string;
}

export interface IUseHeader {
	pathname: string;
	isRegistrationOpen: boolean;
	setIsRegistrationOpen: Dispatch<SetStateAction<boolean>>;
	isLoginOpen: boolean;
	setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
	handleSignOut: () => Promise<void>;
	isAuth: boolean;
	session: Session | null;
	status: TSessionStatus;
}
