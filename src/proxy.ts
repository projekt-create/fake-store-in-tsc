import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
    "/products",
    "/carts",
    "/checkout",
    "/users",
    "/profile",
]

export function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(route));

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/products/:path",
        "/cart/:path",
        "/checkout/:path",
        "/users/:path",
        "/profile/:path",
    ]
}