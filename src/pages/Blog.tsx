
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Read the latest articles, tips, and insights about education, career development, and industry trends.
        </p>
        <p className="mb-8">
          Coming soon: Our full blog with search, categories, and article listings.
        </p>
      </div>
    </div>
  );
};

export default Blog;
