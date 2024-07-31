import { getAllPostIds, getPostData } from "@/lib/md";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";
import { generateTitle } from "@/lib/metadata";

// Define the params type
interface Params {
	case: string;
}

function getPostDetails(id: string) {
	const postData = getPostData(id);
	if (!postData) {
		notFound();
	}
	return postData;
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const postData = await getPostDetails(params.case);
	return {
		title: generateTitle(postData.title),
	};
}

// Fetch static paths
export async function generateStaticParams() {
	const paths = await getAllPostIds();
	return paths.map(({ params }) => ({ id: params.id }));
}

export default async function Post({ params }: { params: Params }) {
	const postData = await getPostDetails(params.case);

	const date = new Date(postData.date).toLocaleDateString();

	const components = {
		// h1: (props: any) => <h1 className="text-4xl font-bold" {...props} />,
		// h2: (props: any) => (
		// 	<h2 className="text-3xl font-bold text-gray-800" {...props} />
		// ),
		// h3: (props: any) => (
		// 	<h3 className="text-xl font-bold text-gray-800" {...props} />
		// ),
		// p: (props: any) => <p className="my-4" {...props} />,
		img: ({ src, alt, width, height }: any) => (
			<span className="flex justify-center">
				<Image
					src={src}
					alt={alt}
					width={width || 500} // Provide default values if necessary
					height={height || 300}
					className="max-w-full h-auto border border-gray-300 rounded-lg"
				/>
			</span>
		),
		// ul: (props: any) => (
		// 	<ul className="list-disc pl-5 mb-4 text-gray-700" {...props} />
		// ),
		// li: (props: any) => <li className="mb-2 text-gray-800" {...props} />,
		// ol: (props: any) => (
		// 	<ol className="list-decimal pl-5 mb-4 text-gray-700" {...props} />
		// ),
	};

	return (
		<main className="container mx-auto px-4 py-6 md:px-6 md:py-8">
			<article className="bg-white border-4 md:border-8 border-secondary border-dashed shadow-md rounded-xl p-6 md:p-8">
				<header className="flex flex-col items-center mb-6">
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">
						{postData.title}
					</h1>
					<p className="text-sm text-gray-500 mb-2 text-center">
						{date}
					</p>
					<p className="text-sm text-gray-600 text-center">
						by {postData.author}
					</p>
				</header>
				<section className="prose lg:prose-xl overflow-hidden break-words">
					<MDXRemote
						source={postData.content}
						components={components}
					/>
				</section>
			</article>
		</main>
	);
}
