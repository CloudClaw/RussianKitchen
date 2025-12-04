import { usePathname } from "next/navigation";
import { IUseHeader } from "../types";
import { useState } from "react";
import { signOutFn } from "@/actions/signOut";
import { useAuthStore } from "@/store/auth.store";

export const useHeader = (): IUseHeader => {
	const pathname = usePathname();

	const { isAuth, status, session, setAuthState } = useAuthStore();

	const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

	const handleSignOut = async () => {
		try {
			await signOutFn();
		} catch (error) {
			console.log("error", error);
		} finally {
			setAuthState("unauthenticated", null);
		}
	};

	return {
		pathname,
		isRegistrationOpen,
		setIsRegistrationOpen,
		isLoginOpen,
		setIsLoginOpen,
		handleSignOut,
		isAuth,
		session,
		status
	};
};
