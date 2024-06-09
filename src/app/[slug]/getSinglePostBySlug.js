// export async function generateMetadata({ params }) {
//   const blog = allBlogs.find((blog) => blog.slug === params.slug);
//   if (!blog) {
//     alert('blog not found');
//     return;
//   }
//   const publishedAt = new Date(blog.date).toISOString();
//   const modifiedAt = new Date(blog.modified || blog.date).toISOString();
//   let imageList = [siteMetadata.socialBanner];
//   // if (blog.image) {
//   //   imageList =
//   //     typeof blog.image.filePath === "string"
//   //       ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
//   //       : blog.image;
//   // }
//   // const ogImages = imageList.map((img) => {
//   //   return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
//   // });
//   const authors = blog?.author ? [blog.author] : siteMetadata.author;
//   return {
//     title: blog.title,
//     description: blog.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.description,
//       url: siteMetadata.siteUrl + blog.url,
//       siteName: siteMetadata.title,
//       locale: "en_US",
//       type: "article",
//       publishedTime: publishedAt,
//       modifiedTime: modifiedAt,
//       images: ogImages,
//       authors: authors.length > 0 ? authors : [siteMetadata.author],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: blog.title,
//       description: blog.description,
//       images: ogImages,
//     },
//   };
// }
export async function getSinglePostBySlug(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}`, { next: { revalidate: 600 } }
  );
  //console.log(response);
  const post = await response.json();
  return post[0];
}

export async function getAdPost() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?categories=3&page=1&per_page=1`, { next: { revalidate: 600 } }
  );
  //console.log(response);
  const post = await response.json();
  return post[0];
}
