import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/Munayer-Advogados2.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Página Inicial', href: '/' },
    { linkText: 'Áreas de atuação', href: '/revalidation' },
    { linkText: 'A Equipe', href: '/image-cdn' },
    { linkText: 'Formas de Contato', href: '/edge' },
    { linkText: 'Publicações da Equipe', href: '/blobs' },
    { linkText: 'Ajuda de navegação', href: '/classics' },
    { linkText: 'Sugestões', href: '/components' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <div className="w-full flex justify-center">
                <Link href="/">
                    <Image src={netlifyLogo} alt="Munayer Advogados logo" />
                </Link>
            </div>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

