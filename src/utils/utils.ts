import fs from "fs";
import path from "path";

export function readingTimeInMinutes(content: string) {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  const timeInMinutes = Math.ceil(words / wpm);
  return timeInMinutes;
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content", "posts"));
}

export function getBlogPostsByTag(tag: string) {
  const allPosts = getBlogPosts();
  return allPosts.filter(post => post.metadata.tags.includes(tag));
}

// Get all unique tags from all blog posts
export function getAllTags() {
  const allPosts = getBlogPosts();
  const allTags = allPosts.flatMap(post => post.metadata.tags); // Get all tags
  return Array.from(new Set(allTags)); // Return unique tags
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
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
  return parseFrontmatter(rawContent);
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    if (key.trim() === "tags") {
      // Remove array brackets
      value = value.replace(/^\[|\]$/g, "");
      // split into array
      let values = value.split(", ");
      // remove quotes from each
      values = values.map((value) => value.replace(/^['"](.*)['"]$/, "$1"));
      metadata["tags"] = values;
    } else {
      // Remove quotes
      value = value.replace(/^['"](.*)['"]$/, "$1");
      metadata[key.trim() as keyof Omit<Metadata, "tags">] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

type Metadata = {
  title: string;
  date: string;
  tags: string[];
};

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
