// src/components/Page.js
import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const Page = ({ file }) => {
  const [content, setContent] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch(file)
      .then(res => res.text())
      .then(raw => {
        const parsed = matter(raw);
        setContent({
          title: parsed.data.title,
          body: marked(parsed.content),
        });
      });
  }, [file]);

  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </div>
  );
};

export default Page;
