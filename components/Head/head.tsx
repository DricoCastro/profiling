import Head from "next/head";

export default function Header({ children, title, icon }: any) {
    const localTitle = title ? `${title} | Mapeamento De Perfil` : "Mapeamento De Perfil";
    return (
        <Head>
            <title>{localTitle}</title>
            <meta name="Description" content=" Mapeamento De Perfil" />
            <meta
                name="keywords"
                content=" Mapeamento De Perfil"
            />
            <link rel="icon" href={icon ?? "/favicon.ico"} />
            {children}
        </Head>
    )
}