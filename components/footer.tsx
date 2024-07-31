import React from "react";
import Image from "next/image";
import Link from "next/link";
import { quickLinks, socialMediaLinks } from "@/lib/dummy-data";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-primary text-white py-8 rounded-xl m-4 md:m-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 gap-8">
				<div className="md:w-1/3">
					<Image
						src="/images/hompim-logo-main.png"
						alt="Logo"
						width={150}
						height={150}
					/>
					<p className="mt-4">
						Our journey began with a simple idea:
						to make technology accessible and beneficial for
						everyone.
					</p>
				</div>
				<div className="md:w-1/3">
					<h3 className="font-bold text-lg mb-4 text-secondary">
						Quick Links
					</h3>
					<ul>
						{quickLinks.map((link, index) => (
							<li key={index} className="mb-2">
								<Link
									href={link.href}
									className="hover:underline underline-offset-2"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="md:w-1/3">
					<h3 className="font-bold text-lg mb-4 text-secondary">
						Follow Us
					</h3>
					<ul className="flex space-x-4 flex-wrap">
						{socialMediaLinks.map((link, index) => (
							<li key={index}>
								<Link
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<link.Icon className="w-6 h-6 text-white hover:text-gray-200" />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="mt-8 mx-4 border-t border-gray-700 pt-4 text-center">
				&copy; {currentYear} Your Company. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
