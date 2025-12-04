import React, { FC } from "react";

const AboutLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <section>{children}</section>;
};

export default AboutLayout;
