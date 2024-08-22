// src/app/page.js
"use client";

import React, { useEffect, useState } from 'react';
import ArticleCard from './components/ArticleCard';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setArticles([
        { title: 'Article 1', excerpt: 'Excerpt 1', slug: 'article-1' },
        { title: 'Article 2', excerpt: 'Excerpt 2', slug: 'article-2' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <main>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))
      )}
    </main>
  );
};

export default HomePage;
