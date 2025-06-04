import React, { useState, useEffect } from "react";
import marked from "marked"; // make sure to install: npm install marked

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("<p class='loading'>Loading...</p>");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHtmlPreview(marked(markdown));
    }, 300); // slight debounce for better performance

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="editor-container">
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
