import { getAllPostIds, getPostData } from "@/lib/md";
import Head from "next/head";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
// Define the params type
interface Params {
	case: string;
}

// Fetch static paths
export async function generateStaticParams() {
	const paths = await getAllPostIds();
	return paths.map(({ params }) => ({ id: params.id }));
}

// Fetch post data for a specific slug
export async function fetchPostData(id: string) {
	const postData = await getPostData(id);
	if (!postData) {
		notFound();
	}
	return postData;
}

export default async function Post({ params }: { params: Params }) {
	const postData = await fetchPostData(params.case);
	console.log("Metadata:", postData);

	const date = new Date(postData.date).toLocaleDateString();

	const components = {
		h1: (props: any) => <h1 className="text-4xl font-bold" {...props} />,
		h2: (props: any) => (
			<h2 className="text-3xl font-bold text-gray-800" {...props} />
		),
		h3: (props: any) => (
			<h3 className="text-xl font-bold text-gray-800" {...props} />
		),
		p: (props: any) => <p className="my-4" {...props} />,
		img: ({ src, alt, width, height }: any) => (
			<Image
				src={src}
				alt={alt}
				width={width || 500} // Provide default values if necessary
				height={height || 300}
				className="my-4 max-w-full h-auto border border-gray-300 rounded-lg"
			/>
		),
		ul: (props: any) => (
			<ul className="list-disc pl-5 mb-4 text-gray-700" {...props} />
		),
		li: (props: any) => <li className="mb-2 text-gray-800" {...props} />,
		ol: (props: any) => (
			<ol className="list-decimal pl-5 mb-4 text-gray-700" {...props} />
		),
	};

	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<main className="container">
				<h1>{postData.title}</h1>
				<p>{date}</p>
				<p>{postData.author}</p>
				<MDXRemote source={postData.content} components={components} />
			</main>
		</>
	);
}
