import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-4xl px-4 py-16 relative">
      <Link href="/" className="absolute left-0 top-4 text-primary-600 hover:underline text-sm font-medium ml-4">
        ← Retour au site
      </Link>
      <h1 className="text-5xl font-bold mb-12 text-center text-neutral-900">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug.current}`}
            key={post._id}
            className="block bg-white/90 rounded-2xl shadow-md border border-neutral-100 hover:shadow-lg transition-shadow duration-200 overflow-hidden group"
          >
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).height(200).url()}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-200"
              />
            )}
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-500 mb-2">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
              </p>
              <span className="inline-block text-primary-600 font-medium mt-auto group-hover:underline">Lire l'article →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 