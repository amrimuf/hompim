"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

import { LinkItem } from "@/lib/types";
import { headerLinks } from "@/lib/dummy-data";
import { useState } from "react";
import Cta from "./cta";

interface HeaderProps {
	links: LinkItem[];
}

const Header = ({ links }: HeaderProps) => {
	// dropdown menu
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const handleMouseEnter = (index: number) => {
		setOpenIndex(index);
	};
	const handleMouseLeave = () => {
		setOpenIndex(null);
	};

	// hamburger menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// mobile menu
	const [expandedMenuIndex, setExpandedMenuIndex] = useState<number | null>(
		null
	);

	const toggleExpandMenu = (index: number) => {
		setExpandedMenuIndex(expandedMenuIndex === index ? null : index);
	};

	return (
		<header className="bg-primary text-white fixed top-0 w-full shadow-md z-50">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
				<div className="flex justify-between items-center">
					<Link href="/">
						<Image
							src="/images/hompim-logo-main.png"
							alt="logo"
							sizes="100px"
							height={50}
							width={100}
						/>
					</Link>

					{/* DESKTOP MENU */}
					<ul className="space-x-4 hidden md:flex">
						{headerLinks.map((link, index) => (
							<li
								key={index}
								className="relative p-2"
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}
							>
								{link.href ? (
									<Link
										href={link.href}
										className="text-white"
									>
										{link.label}
									</Link>
								) : (
									<span className="flex cursor-pointer items-center">
										{link.label}
										<ChevronDown
											className={`ml-1 h-4 w-4 transition-transform duration-200 ${
												openIndex === index
													? "rotate-180"
													: "rotate-0"
											}`}
										/>
									</span>
								)}
								{link.content && openIndex === index && (
									<div className="absolute left-0 top-full rounded-md bg-white border border-gray-200 shadow-lg text-primary/60 hover:text-primary min-w-max ">
										<ul>
											{link.content.map((item, idx) => (
												<Link
													href={item.href}
													key={idx}
												>
													<li className="p-2 text-primary/70 hover:text-primary rounded-md hover:bg-primary/10 border-primary/10  max-h-96 border-b-4 hover:border-b-2">
														{item.name}
													</li>
												</Link>
											))}
										</ul>
									</div>
								)}
							</li>
						))}
					</ul>

					<Cta className="hidden md:inline-flex" />

					{/* HAMBURGER */}
					<div className="md:hidden flex">
						<button onClick={toggleMobileMenu}>
							{isMobileMenuOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
			</nav>

			{/* MOBILE MENU */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center font-bold">
					<button
						onClick={toggleMobileMenu}
						className="absolute top-4 right-4"
					>
						<X />
					</button>
					<div className="w-full h-full overflow-y-auto ">
						<div className="flex flex-col items-center justify-center min-h-full p-8">
							<ul className="space-y-4 ">
								{links.map((link, index) => (
									<li key={index} className="w-full">
										<div
											className="flex justify-between items-center cursor-pointer text-6xl"
											onClick={() =>
												toggleExpandMenu(index)
											}
										>
											{link.href ? (
												<Link
													href={link.href}
													onClick={toggleMobileMenu}
												>
													{link.label}
												</Link>
											) : (
												<>
													<span>{link.label}</span>
													<ChevronDown
														strokeWidth={3}
														className={`ml-1 transition duration-200 ${
															expandedMenuIndex ===
															index
																? "rotate-180"
																: "rotate-0"
														}`}
													/>
												</>
											)}
										</div>
										{link.content &&
											expandedMenuIndex === index && (
												<ul className="mt-2 space-y-2 text-4xl">
													{link.content.map(
														(item, idx) => (
															<li
																key={idx}
																className="pl-4"
															>
																<Link
																	href={
																		item.href
																	}
																	onClick={
																		toggleMobileMenu
																	}
																>
																	{item.name}
																</Link>
															</li>
														)
													)}
												</ul>
											)}
									</li>
								))}
								<Cta onClick={toggleMobileMenu} />
							</ul>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
