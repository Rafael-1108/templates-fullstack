import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

export const metadata = {
  title: "Next.js CRUD",
  description:
    "Projeto com CRUD com Next.js 16, React, Ant Design, Toat e Axios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
        <Toaster />
      </body>
    </html>
  );
}
