import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [htmlPreview, setHtmlPreview] = useState('<p class="loading">Loading...</p>');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHtmlPreview(marked(markdown));
    }, 300);

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      ></div>
    </div>
  );
};

export default MarkdownEditor;
