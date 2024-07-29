import { getAllPostIds, getPostData } from "@/lib/posts";
import dynamic from "next/dynamic";
import Head from "next/head";
import { notFound } from "next/navigation";

// Define the params type
interface Params {
	case: string;
}

// Fetch static paths
export async function generateStaticParams() {
	const paths = await getAllPostIds();
	console.log(paths);
	return paths.map(({ params }) => ({ id: params.id }));
}

// Fetch post data for a specific slug
export async function fetchPostData(id: string) {
	const postData = await getPostData(id);
	if (!postData) {
		notFound(); // Optional: Handle the case where the post does not exist
	}
	return postData;
}

export default async function Post({ params }: { params: Params }) {
	console.log(params.case);
	const postData = await fetchPostData(params.case);
	const Mdx = dynamic(() => import(`@/lib/contents/${params.case}.mdx`), {
		ssr: false,
	});
	console.log("Metadata:", postData);
	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1>{postData.title}</h1>
				<p>{postData.date}</p>
				<Mdx />
			</article>
		</>
	);
}
