"use client";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/config/site.config";
import { useHeader } from "./useHeader";
import { layoutConfig } from "@/config/layout.config";
import RegistrationModal from "../modals/RegistrationModal";
import LoginModal from "../modals/LoginModal";

export const Logo = () => {
	return <Image src="/borsh.png" alt="Картинка с борщем" width={26} height={26} priority />;
};

export default function Header() {
	const {
		pathname,
		isLoginOpen,
		setIsLoginOpen,
		isRegistrationOpen,
		setIsRegistrationOpen,
		handleSignOut,
		isAuth,
		session,
	} = useHeader();

	const getNavItems = () => {
		return SiteConfig.headerLinks.map((link) => {
			const isActive = pathname === link.href;
			return (
				<NavbarItem key={link.label}>
					<Link
						href={link.href}
						className={`px-3 py-1 
							${isActive ? "text-blue-500" : "text-foreground"}
							hover:text-blue-500 hover:border
							hover:border-blue-300 hover:rounded-md
							transition-colors
							transition-border
							dureation-200
							`}
					>
						{link.label}
					</Link>
				</NavbarItem>
			);
		});
	};

	return (
		<Navbar className={`h-[${layoutConfig.headerHeight}]`}>
			<NavbarBrand>
				<Link href="/" className="flex gap-1">
					<Logo />
					<p className="font-bold text-inherit">{SiteConfig.title}</p>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{getNavItems()}
			</NavbarContent>
			<NavbarContent justify="end">
				{isAuth && `Привет, ${(session?.user?.email as string).split("@")[0]}`}
				{isAuth && (
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} href="#" variant="flat" onPress={handleSignOut}>
							Выйти
						</Button>
					</NavbarItem>
				)}
				{!isAuth && (
					<>
						<NavbarItem className="hidden lg:flex">
							<Button as={Link} href="#" variant="flat" onPress={() => setIsLoginOpen(true)}>
								Войти
							</Button>
						</NavbarItem>
						<NavbarItem className="hidden lg:flex">
							<Button
								as={Link}
								color="primary"
								href="#"
								variant="flat"
								onPress={() => setIsRegistrationOpen(true)}
							>
								Зарегистрироваться
							</Button>
						</NavbarItem>
					</>
				)}
			</NavbarContent>

			<RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
			<LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
		</Navbar>
	);
}
