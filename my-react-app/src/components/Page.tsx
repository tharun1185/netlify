// src/components/Page.js
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const Page = (props: { file: any }) => {
  const [content, setContent] = useState<any>({ title: "", body: "" });

  useEffect(() => {
    fetch(props.file)
      .then(res => res.text())
      .then(raw => {
        const parsed = matter(raw);
        setContent({
          title: parsed.data.title,
          body: marked(parsed.content),
        });
      });
  }, [props?.file]);

  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </div>
  );
};

export default Page;
