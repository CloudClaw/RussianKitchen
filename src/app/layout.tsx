import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClientProvider } from "@/providers/ClientProvider";
import { SiteConfig } from "@/config/site.config";
import Header from "@/components/ui/Header/Header";
import { layoutConfig } from "@/config/layout.config";
import { ServerProvider } from "@/providers/ServerProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: SiteConfig.title,
	description: SiteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ServerProvider>
					<ClientProvider>
						<Header />
						<main
							className={`flex flex-col w-full justify-start items-center`}
							style={{
								height: `calc(100vh - ${layoutConfig.footerHeight} - ${layoutConfig.headerHeight})`,
							}}
						>
							{children}
						</main>
						<footer
							className={`flex justify-center items-center`}
							style={{
								height: layoutConfig.footerHeight,
							}}
						>
							<p>{SiteConfig.description}</p>
						</footer>
					</ClientProvider>
				</ServerProvider>
			</body>
		</html>
	);
}
