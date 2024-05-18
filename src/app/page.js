//import {allBlogs} from "contentlayer/generated";
async function getPosts() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`, { next: { revalidate: 600 }}
	);
	const posts = await response.json();
	return posts;
}
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Tickers from "../components/Home/Tickers";

export default async function Home() {
  const allBlogs = await getPosts();
  return (
    <main className="flex flex-col items-center justify-center">
      {/* <HomeCoverSection blogs={allBlogs} /> Temporary removing*/}
      {/* <FeaturedPosts blogs={allBlogs} /> Temporary removing */}
      <Tickers blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />


    </main>
  )
}
