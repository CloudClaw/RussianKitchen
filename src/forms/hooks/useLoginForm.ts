import { signInWithCredentials } from "@/actions/signIn";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface IUseLoginFormProps {
	onClose: () => void;
}

interface IUseLoginFormReturn {
	formData: IFormData;
	setFormData: Dispatch<SetStateAction<IFormData>>;
	handleSubmit: (e: FormEvent<Element>) => Promise<void>;
}

interface IFormData {
	email: string;
	password: string;
	confirmPassword: string;
}

export const useLoginForm = ({ onClose }: IUseLoginFormProps): IUseLoginFormReturn => {
	const [formData, setFormData] = useState<IFormData>({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await signInWithCredentials(formData.password, formData.email);
		console.log(result);
		onClose();
	};

	return {
		formData,
		setFormData,
		handleSubmit,
	};
};
