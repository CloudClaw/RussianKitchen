'use server';

import { signOut } from "@/auth/auth";

export async function signOutFn() {
	try {
		const result = await signOut();
		return result;
	} catch (error) {
		console.error("Error signing out:", error);
		throw error;
	}
}
