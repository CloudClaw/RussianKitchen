"use server";

import { IRegistrationForm } from "@/globalTypes";
import { saltAndHashPassword } from "@/utils/password";
import { prisma } from "@/utils/prisma";

export async function registration(formData: IRegistrationForm) {
	try {
		const { email, password, confirmPassword } = formData;

		if (password !== confirmPassword) {
			throw new Error("Passwords do not match");
		}

		if (password.length < 6) {
			throw new Error("Password must be at least 6 characters long");
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			throw new Error("User with this email already exists");
		}

		const pwHash = await saltAndHashPassword(password);

		const user = await prisma.user.create({
			data: {
				email: email,
				password: pwHash,
			},
		});

		return user;
	} catch (error) {
		console.log(error);
	}
}
