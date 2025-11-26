"use server";

import { auth } from "@/auth/auth";
import { SessionProvider } from "next-auth/react";

export async function ServerProvider({ children }: { children: React.ReactNode }) {
	const session = await auth();
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
