export default function Post({ title, excerpt, image, author, date, likes }) {
    return (
      <article className="post-card">
        <img src={image} alt={title} className="post-image" />
        <div className="post-content">
          <h2 className="post-title">{title}</h2>
          <p className="post-excerpt">{excerpt}</p>
          <div className="post-meta">
            <span>{author} • {date}</span>
            <span>{likes} Likes</span>
          </div>
        </div>
      </article>
    );
  }