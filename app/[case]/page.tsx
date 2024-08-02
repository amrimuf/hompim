import { getAllPostIds, getPostData } from "@/lib/md";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";

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
		title: postData.title,
		description: postData.description
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
		img: ({ src, alt, width, height }: any) => (
			<span className="flex justify-center">
				<Image
					src={src}
					alt={alt}
					width={width || 400}
					height={height || 300}
					className="max-w-full h-auto border border-gray-300 rounded-lg !m-0"
				/>
			</span>
		),
	};

	return (
		<main className="container mx-auto px-4 py-6 md:px-6 md:py-8">
			<article className="bg-white border-4 md:border-8 border-primary/10 border-dashed shadow-md rounded-xl p-6 md:p-8">
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
