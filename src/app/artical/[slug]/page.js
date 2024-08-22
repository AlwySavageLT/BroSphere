// src/app/article/[slug]/page.js
import Tags from '../../components/Tags';

const ArticlePage = ({ params }) => {
  const { slug } = params;
  // Fetch article details and tags here

  return (
    <div>
      <h1>Article Title</h1>
      <div>Article Content</div>
      <Tags tags={['Tech', 'JavaScript']} />
      <Comments comments={[{ text: 'Great article!' }]} />
    </div>
  );
};

export default ArticlePage;
