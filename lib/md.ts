import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the type for the post metadata
interface PostMetadata {
	title: string;
	author: string;
	date: string;
	description?: string
}

// Define the type for the post data
export interface PostData extends PostMetadata {
	id: string;
	content: string; // MDX content
}

// Define the directory where your posts are stored
const postsDirectory = path.join(process.cwd(), "lib/contents");

export function getPostData(id: string) {
	const filePath = path.join(postsDirectory, `${id}.mdx`);

	try {
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data, content } = matter(fileContents);
		return {
			id,
			content, // Extract the content from matterResult
			...(data as PostMetadata), // Cast the metadata to the correct type
		};
	} catch (error: any) {
		// Handle the error and return null or throw
		if (error.code === "ENOENT") {
			// File not found
			return null;
		}
		throw error; // Re-throw if it's a different error
	}
}

export function getAllPostIds(): { params: { id: string } }[] {
	const fileNames = fs.readdirSync(postsDirectory);

	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, ""),
			},
		};
	});
}
