import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "online-meeting",
    description: "A simple online meeting app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrains.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
