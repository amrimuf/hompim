"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

import type { Metadata } from "next";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleReset = () => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		setIsSubmitted(false);
		setError(null); // Clear any error messages
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formData,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
			);
			console.log("Email sent successfully:", result);
			setIsSubmitted(true);
			setFormData({ name: "", email: "", message: "" }); // Clear form
		} catch (error) {
			console.error("Error sending email:", error);
			setError("An error occurred. Please try again later.");
		}
	};

	return (
		<main className="container mx-auto p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
			<p className="text-gray-600 mb-4">
				We&apos;d love to hear from you. Please fill out the form below
				to get in touch.
			</p>
			{isSubmitted ? (
				<p className="text-green-600">
					Thank you for your message! We&apos;ll get back to you soon.
				</p>
			) : (
				<>
					{error && <p className="text-red-600">{error}</p>}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
								required
							></textarea>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="bg-primary text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
							>
								Send
							</button>
							<button
								type="button"
								onClick={handleReset}
								className="bg-secondary px-4 py-2 rounded-md shadow-sm hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
							>
								Reset
							</button>
						</div>
					</form>
				</>
			)}
		</main>
	);
};

export default ContactUs;
