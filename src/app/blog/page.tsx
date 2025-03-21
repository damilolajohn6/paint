
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Interior Painting Tips for a Professional Finish",
    description:
      "Learn how to achieve a smooth, flawless paint job with these simple but effective techniques used by pros.",
    image: "/assets/homehero1.jpg",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Color Palette for Your Home",
    description:
      "Struggling to pick the right colors? Discover expert advice on creating color harmony that suits your style.",
    image: "/assets/homehero1.jpg",
  },
  {
    id: 3,
    title: "The Best Time of Year to Paint Your Home’s Exterior",
    description:
      "Weather plays a big role in painting success. Find out the ideal conditions for long-lasting exterior paint.",
    image: "/assets/homehero1.jpg",
  },
  {
    id: 4,
    title: "DIY vs Professional Painters: What’s Right for You?",
    description:
      "Considering a DIY paint job? Learn when it’s best to hire a pro and when you can tackle it yourself.",
    image: "/assets/homehero1.jpg",
  },
  {
    id: 5,
    title: "Eco-Friendly Paint Options for a Greener Home",
    description:
      "Explore sustainable paint brands and products that are better for your health and the environment.",
    image: "/assets/homehero1.jpg",
  },
  {
    id: 6,
    title: "Common Painting Mistakes and How to Avoid Them",
    description:
      "Avoid streaks, drips, and uneven coverage with these expert solutions to common painting issues.",
    image: "/assets/homehero1.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className="w-full">
      <section className="bg-yellow-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="w-full rounded-lg p-6 md:p-10 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0A0A5E] leading-tight">
              Explore Our Publications to Stay on The Latest Painting Trends
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-[#020248]">Recent News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                width={600}
                height={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#020248]">
                  {post.title}
                </h3>
                <p className="text-gray-700 mt-2">{post.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
