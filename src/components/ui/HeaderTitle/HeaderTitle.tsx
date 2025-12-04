"use client";

import { SiteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderTitle = () => {
	const pathName = usePathname();

	const currentNavItem = SiteConfig.headerLinks.find((link) => link.href === pathName);
	const pageTitle = currentNavItem ? currentNavItem.label : SiteConfig.title;

	return (
		<div className="w-full flex justify-center my-6">
			<h1 className="text-3xl font-bold">{pageTitle}</h1>
		</div>
	);
};

export default HeaderTitle;
