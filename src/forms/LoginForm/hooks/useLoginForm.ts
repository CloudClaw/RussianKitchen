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
}

export const useLoginForm = ({ onClose }: IUseLoginFormProps): IUseLoginFormReturn => {
	const [formData, setFormData] = useState<IFormData>({
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await signInWithCredentials(formData.email, formData.password);

		window.location.reload();

		onClose();
	};

	return {
		formData,
		setFormData,
		handleSubmit,
	};
};
