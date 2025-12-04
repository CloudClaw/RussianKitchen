"use client";

import { SiteConfig } from "@/config/site.config";
import DOMPurify from "isomorphic-dompurify";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";
import React from "react";

function PageContent() {
	const pathname = usePathname();
	const pageContent = SiteConfig.pagesContent[pathname as keyof typeof SiteConfig.pagesContent];

	if (!pageContent) {
		<div>Страница не найдена</div>;
	}

	const puryfiedHtml = DOMPurify.sanitize(pageContent.content);
	return <div>{parse(puryfiedHtml)}</div>;
}

export default PageContent;
