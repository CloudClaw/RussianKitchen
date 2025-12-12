import React, { FC } from "react";

const IngredientsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <section>{children}</section>;
};

export default IngredientsLayout;
