import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0' }}>
          <Link href="/" className="logo">BroSphere</Link>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/trending" className="nav-link">Trending</Link>
            <Link href="/new" className="nav-link">New</Link>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="write-button">Write</button>
            <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'relative' }}>
              <img src="/avatar-placeholder.jpg" alt="User" className="avatar" />
              {isOpen && (
                <div className="dropdown-menu">
                  <Link href="/profile" className="dropdown-item">Profile</Link>
                  <Link href="/settings" className="dropdown-item">Settings</Link>
                  <Link href="/logout" className="dropdown-item">Logout</Link>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}