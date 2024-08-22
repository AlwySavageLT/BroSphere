// src/app/components/AnimatedArticleCard.js
import { motion } from 'framer-motion';

const AnimatedArticleCard = ({ title, excerpt, slug }) => {
  return (
    <motion.div
      className="article-card"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="article-title">{title}</h2>
      <p>{excerpt}</p>
      <Link href={`/articles/${slug}`}>
        Read more
      </Link>
    </motion.div>
  );
};

export default AnimatedArticleCard;
