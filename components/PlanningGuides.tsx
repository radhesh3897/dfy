import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Section } from "@/components/Section";

export function PlanningGuides({ slugs, title }: { slugs: string[]; title: string }) {
  const posts = slugs.flatMap(slug => blogPosts.filter(post => post.href === `/resources/blog/${slug}`));
  return (
    <Section tone="white" eyebrow="Planning guides" title={title}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map(post => (
          <Link key={post.href} href={post.href} className="rounded-[14px] border border-[#CDEECD] p-6 transition hover:bg-[#EEF8EE]">
            <h3 className="text-xl font-semibold leading-7 text-[#164E50]">{post.title}</h3>
            <p className="mt-3 text-base leading-7 text-[#465163]">{post.description}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-[#164E50]">Read the guide →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
