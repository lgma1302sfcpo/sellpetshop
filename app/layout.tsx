import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luiz Guilherme | Sistema de gestão para pet shops',
  description: 'Sistema personalizado para vendas, estoque, clientes, banho e tosa, caixa e gestão de pet shops.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
