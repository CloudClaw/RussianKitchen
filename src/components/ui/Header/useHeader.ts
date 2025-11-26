import { usePathname } from "next/navigation";
import { IUseHeader } from "./types";
import { useState } from "react";
import { signOutFn } from "@/actions/signOut";
import { useSession } from "next-auth/react";

export const useHeader = (): IUseHeader => {
	const pathname = usePathname();
	const { data: session, status} = useSession();

	console.log(session, status);

	const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

	const handleSignOut = async () => {
		await signOutFn();
	}

	return {
		pathname,
		isRegistrationOpen,
		setIsRegistrationOpen,
		isLoginOpen,
		setIsLoginOpen,
		handleSignOut
	};
};
