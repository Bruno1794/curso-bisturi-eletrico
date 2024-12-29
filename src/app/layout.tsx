import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Curso Bisturi Eletrico",
    description: "CAPACITAÇÃO USO BISTURI ELÉTRICO NA ODONTOLOGIA GENGIVOPLASTIA E OUTRAS APLICAÇÕES CLÍNICAS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body>
        {children}
        </body>
        </html>
    );
}
