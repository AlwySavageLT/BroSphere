// src/app/editor/page.js
import React, { useState } from 'react';
import Editor from '../components/Editor';

const EditorPage = () => {
  const [content, setContent] = useState('<p>Start writing...</p>');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Editor</h1>
      <Editor value={content} onChange={setContent} />
    </div>
  );
};

export default EditorPage;
