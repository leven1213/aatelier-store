import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
    providers: [], // Required by NextAuthConfig type
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorized({ request, auth }: any) {
            // Array of regex patterns of protected paths 
            const protectedPaths = [
                /\/shipping-address/,
                /\/payment-method/,
                /\/place-order/,
                /\/profile/,
                /\/user\/(.*)/,
                /\/order\/(.*)/,
                /\/admin/,
            ];

            // Get pathname from the req URL object
            const { pathname } = request.nextUrl; 

            // Check if user is not authenticated and accessing a protected path
            if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

            // Check for session cart cookie
            if (!request.cookies.get('sessionCartId')) {
                // Generate new session cart id cookie
                const sessionCardId = crypto.randomUUID();

                const response = NextResponse.next({
                    request: {
                        headers: new Headers(request.headers),
                    },
                });

                // Set newly generated sessionCartId in the response cookies
                response.cookies.set('sessionCartId', sessionCardId);

                return response;
            }

            return true;
        },
    },
} satisfies NextAuthConfig;