// src/app/profile/page.js
"use client"; // Ensure this is at the top

import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to sign in to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      {/* Other profile details */}
    </div>
  );
};

export default ProfilePage;
