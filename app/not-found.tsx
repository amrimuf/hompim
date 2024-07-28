"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-blue-500">
				404 - Page Not Found
			</h1>
			<p className="mt-2 text-gray-600">
				Sorry, the page you are looking for does not exist.
			</p>
			<div className="mt-4">
				<Link
					href="/"
					className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
				>
					Go to Home
				</Link>
			</div>
			<div className="mt-4">
				<button
					onClick={() => router.back()}
					className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700"
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NotFoundPage;
