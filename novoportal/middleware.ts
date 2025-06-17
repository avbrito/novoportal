import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    raw: false,
  });

  const { pathname } = req.nextUrl;

  //permite acesso a arquivos publicos
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/Login') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

 

  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  //restringe acesso aos perfis
  if (pathname.startsWith('/Empresa') && token.codTipoCliente !== '7') {
    return NextResponse.redirect(new URL('/Unauthorized', req.url));
  }

  if (pathname.startsWith('/Beneficiario') && token.codTipoCliente !== '3') {
    return NextResponse.redirect(new URL('/Unauthorized', req.url));
  } 
  
  if (pathname.startsWith('/Cooperado') && token.codTipoCliente !== '4') {
    return NextResponse.redirect(new URL('/Unauthorized', req.url));
  }

  if (pathname.startsWith('/Prestador') && token.codTipoCliente !== '6') {
    return NextResponse.redirect(new URL('/Unauthorized', req.url));
  }

  if (pathname.startsWith('/Secretariado') && token.codTipoCliente !== '5') {
    return NextResponse.redirect(new URL('/Unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|Login|AcessPF|AcessCoop|AcessEmpresa|AcessSecretariado|AcessPrestador).*)'],
};
