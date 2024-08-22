// src/app/components/Editor.js
"use client";

import React, { useRef, useEffect } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const Editor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image']
        ]
      }
    });

    quill.on('text-change', () => {
      onChange(quill.root.innerHTML);
    });

    return () => {
      quill.off('text-change');
    };
  }, [onChange]);

  return <div ref={editorRef} dangerouslySetInnerHTML={{ __html: value }} />;
};

export default Editor;
