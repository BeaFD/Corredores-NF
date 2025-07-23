import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

function getBlogPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const { data } = matter(content);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title || "Sin título",
        date: typeof data.date === "string" ? data.date : (data.date ? data.date.toISOString() : ""),
        summary: data.summary || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Blog
        </h1>
        {posts.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">
            No hay publicaciones todavía.
          </p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="text-gray-700">{post.summary}</p>
                <Link href={`/blog/${post.slug}`}>
                  <span className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer">
                    Leer más
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}