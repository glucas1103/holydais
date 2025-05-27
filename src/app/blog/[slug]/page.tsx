import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import PortableTextClient from "@/components/blog/PortableTextClient";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  publishedAt,
  body,
  "author": author->name,
  "categories": categories[]->title
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug: params.slug }, options);
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(800).height(400).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl px-4 py-12 flex flex-col gap-6">
      <Link href="/blog" className="inline-block text-sm text-primary-600 hover:underline mb-2">
        ← Retour au blog
      </Link>
      <article className="bg-white/90 rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-neutral-100">
        {postImageUrl && (
          <div className="w-full flex justify-center">
            <img
              src={postImageUrl}
              alt={post.title}
              className="rounded-2xl border border-neutral-200 shadow-md w-full max-w-[95%] mx-auto"
              style={{maxHeight: 400, objectFit: 'cover'}}
              width="800"
              height="400"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-neutral-900 font-sans text-center">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4 justify-center">
          {post.author && <span>Par <span className="font-semibold text-neutral-700">{post.author}</span></span>}
          {post.publishedAt && <span>• Publié le {new Date(post.publishedAt).toLocaleDateString()}</span>}
          {post.categories && post.categories.length > 0 && (
            <span>• {post.categories.map((cat: string, i: number) => (
              <span key={cat}>{cat}{i < post.categories.length - 1 ? ', ' : ''}</span>
            ))}</span>
          )}
        </div>
        <div className="prose prose-lg prose-neutral max-w-none mx-auto text-justify font-sans text-neutral-800">
          {Array.isArray(post.body) && <PortableTextClient value={post.body} />}
        </div>
      </article>
    </main>
  );
} 