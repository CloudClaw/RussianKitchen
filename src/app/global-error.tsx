"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const GlobalError = () => {
	const searchParams = useSearchParams();
	const message = searchParams.get("message") || "Неизвестная ошибка";

	return (
		<div className="flex justify-content items-center">
			<p className="text-red-500 text-xl">{message}</p>
		</div>
	);
};

export default GlobalError;
