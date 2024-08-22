// src/app/components/ArticleCard.js
"use client";

import React from 'react';

const ArticleCard = ({ title, excerpt, slug }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{title}</h2>
      <p>{excerpt}</p>
      <a href={`/articles/${slug}`}>Read more</a>
    </div>
  );
};

export default ArticleCard;
