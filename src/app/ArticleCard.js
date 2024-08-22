// src/app/ArticleCard.js
import Link from 'next/link';
import './global.css';

const ArticleCard = ({ title, excerpt, slug }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{title}</h2>
      <p>{excerpt}</p>
      <Link href={`/articles/${slug}`}>
        Read more
      </Link>
    </div>
  );
};

export default ArticleCard;
