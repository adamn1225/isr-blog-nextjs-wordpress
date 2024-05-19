import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <Image
          src="/workspaces/isr-blog-nextjs-wordpress/public/favicon/paragon-van-lines-nob-logo-509w.png"
          alt="Paragon Van Lines Logo"
        />
      </Link>
      .
    </h2>
  );
}
