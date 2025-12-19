import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const token = await getToken({ req: request });
	const protectedRoutes = ["/ingredients", "/recipes/new", "/recipes/:path*"];

	if (protectedRoutes.some((route) => pathname.startsWith(route.replace(":path*", "")))) {
		if (!token) {
			const url = new URL("/global-error", request.url);
			url.searchParams.set("message", "Недостаточно прав");
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/ingredients", "/recipes/new", "/recipes/:path"],
};
