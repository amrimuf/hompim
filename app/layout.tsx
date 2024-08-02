import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTopButton from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { headerLinks } from "@/lib/dummy-data";
import { APP_NAME } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: `${APP_NAME} - Digital Creative & Marketing Agency | SaaS House`,
	},
	description: `${APP_NAME} is a leading digital creative and marketing agency specializing in innovative solutions for brands and SaaS products. We offer cutting-edge strategies in digital marketing, creative design, and software developments to elevate your business presence and drive growth.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/favicon/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/favicon/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/favicon/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/favicon/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/favicon/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/favicon/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/favicon/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/favicon/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-icon-180x180.png"
			/>

			{/* Android Icons */}
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/favicon/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>

			<body className={inter.className}>
				<Header links={headerLinks}></Header>
				<main className="pt-20">{children}</main>
				<BackToTopButton />
				<Footer />
			</body>
		</html>
	);
}
