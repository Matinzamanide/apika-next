export async function generateMetadata({ params }: any) {
    const res = await fetch(`https://apika.ir/apitak/blog/get_post.php?slug=${params.slug}`);
    const post = await res.json();
  
    return {
      title: post.meta_title || post.title,
      description: post.meta_description,
      openGraph: {
        images: [post.featured_image],
      },
    };
  }
  