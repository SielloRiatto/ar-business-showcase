import { NextRequest, NextResponse } from 'next/server';
import { getLanguageOnServer, pathnameHasLanguage } from './i18n';

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathnameHasLanguage(pathname)) return NextResponse.next()

    const language = getLanguageOnServer(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${language}${pathname}`;
    
    return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
