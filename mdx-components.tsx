import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Allows customizing built-in components, e.g., to add styling.
		h1: ({ children }) => (
			<h1 className="text-4xl font-bold text-gray-900">{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-3xl font-bold text-gray-800">{children}</h2>
		),
		p: ({ children }) => (
			<p className="text-lg text-blue-600 my-4">{children}</p>
		),
		a: ({ href, children }) => (
			<a href={href} className="text-blue-600 hover:underline">
				{children}
			</a>
		),
		img: (props) => (
			// eslint-disable-next-line jsx-a11y/alt-text
			<Image
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				{...(props as ImageProps)}
			/>
		),
		...components,
	};
}
