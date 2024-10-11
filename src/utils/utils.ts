import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

export function readingTimeInMinutes(content: string) {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  const timeInMinutes = Math.ceil(words / wpm);
  return timeInMinutes;
}

export function getBlogPosts() {
  return getMDXData<PostsMetadata>(
    path.join(process.cwd(), "content", "posts")
  );
}

export function getProjects() {
  return getMDXData<ProjectsMetadata>(
    path.join(process.cwd(), "content", "projects")
  );
}

export function getBlogPostsByTag(tag: string) {
  const allPosts = getBlogPosts();
  return allPosts.filter((post) => post.metadata.tags.includes(tag));
}

export function getProjectsByTag(tag: string) {
  const allProjects = getProjects();
  return allProjects.filter((project) => project.metadata.tags.includes(tag));
}

// Get all unique tags from all blog posts
export function getAllTags() {
  const allPosts = getBlogPosts();
  const allTags = allPosts.flatMap((post) => post.metadata.tags); // Get all tags
  return Array.from(new Set(allTags)); // Return unique tags
}

function getMDXData<T>(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata: data as T,
      slug,
      content,
    };
  });
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter.default(rawContent);
  // return parseFrontmatter(rawContent);
}

// function parseFrontmatter<T extends CommonMetadata>(fileContent: string) {
//   let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
//   let match = frontmatterRegex.exec(fileContent);
//   let frontMatterBlock = match![1];
//   let content = fileContent.replace(frontmatterRegex, "").trim();
//   let frontMatterLines = frontMatterBlock.trim().split("\n");
//   let metadata: Partial<T> = {};

//   frontMatterLines.forEach((line) => {
//     let [key, ...valueArr] = line.split(": ");
//     let value = valueArr.join(": ").trim();
//     if (key.trim() === "tags") {
//       // Remove array brackets
//       value = value.replace(/^\[|\]$/g, "");
//       // split into array
//       let values = value.split(", ");
//       // remove quotes from each
//       values = values.map((value) => value.replace(/^['"](.*)['"]$/, "$1"));
//       metadata["tags"] = values;
//     } else {
//       // Remove quotes
//       value = value.replace(/^['"](.*)['"]$/, "$1");
//       metadata[key.trim() as keyof Partial<Omit<T, "tags">>] = value;
//     }
//   });

//   return { metadata: metadata as T, content };
// }

export interface PostsMetadata extends CommonMetadata {
  date: string;
}

export interface ProjectsMetadata extends CommonMetadata {
  summary: string;
  links?: { text: string; url: string }[];
}

type CommonMetadata = {
  title: string;
  tags: string[];
};

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
