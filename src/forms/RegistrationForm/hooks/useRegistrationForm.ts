import { registration } from "@/actions/registration";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
// import { registerUser } from "@/actions/register";

interface IUseRegistrationFormProps {
	onClose: () => void;
}

interface IUseRegistrationFormReturn {
	formData: IFormData;
	setFormData: Dispatch<SetStateAction<IFormData>>;
	validateEmail: (email: string) => boolean;
	handleSubmit: (e: FormEvent<Element>) => Promise<void>;
}

interface IFormData {
	email: string;
	password: string;
	confirmPassword: string;
}

export const useRegistrationForm = ({ onClose }: IUseRegistrationFormProps): IUseRegistrationFormReturn => {
	const [formData, setFormData] = useState<IFormData>({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = await registration(formData);
		console.log(result)
		onClose();
	};

	return {
		formData,
		setFormData,
		validateEmail,
		handleSubmit,
	};
};
