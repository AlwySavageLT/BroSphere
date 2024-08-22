import { useState } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import '../styles/Home.css';

export default function Home() {
  const [activeTag, setActiveTag] = useState('All');
  const tags = ['All', 'Nature', 'Travel', 'Lifestyle', 'Food', 'Tech'];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Header />
      <main className="container main-content">
        <div style={{ display: 'flex', gap: '2rem' }}>
          <aside className="sidebar">
            <nav className="tag-list">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className={`tag-item ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="post-feed">
            <Post
              title="Exploring the Mountains"
              excerpt="Join us as we explore the majestic mountains and discover the beauty of nature."
              image="/mountain.jpg"
              author="John Smith"
              date="July 20, 2023"
              likes={15}
            />
            <Post
              title="City Life: The Hustle and Bustle"
              excerpt="Experience the vibrant energy of city life, from the busy streets to the towering skyscrapers."
              image="/city.jpg"
              author="Jane Doe"
              date="July 18, 2023"
              likes={20}
            />
            <Post
              title="Coffee Shops: A Cozy Retreat"
              excerpt="Discover the charm of local coffee shops, perfect for a relaxing break or a productive work session."
              image="/coffee-shop.jpg"
              author="Alex Johnson"
              date="July 15, 2023"
              likes={30}
            />
          </div>
        </div>
      </main>
    </div>
  );
}