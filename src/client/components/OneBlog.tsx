import * as React from "react";
import { IBlog } from "../utils/types";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import { Link } from "react-router-dom";

const OneBlog: React.FC<IOneBlogProps> = (props: IOneBlogProps) => {
  let [blog, setBlog] = useState<IBlog>({});
  const { id } = useParams();

  const getBlog = async () => {
    try {
      let r = await fetch(`/api/blogs/${id}`);
      let blog = await r.json();
      setBlog(blog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">{blog.title}</h1>
      <h4 className="text-primary text-center">{blog.content}</h4>
      <p className="text-primary text-center">written by {blog.name}</p>
      {blog.tags.map((tag: { name: string }) => (
        <Link
          to={`/${tag.name}`}
          className="badge badge-pill badge-secondary"
        >
          {tag.name}
        </Link>
      ))}
    </main>
  );
};

interface IOneBlogProps extends RouteComponentProps<{ id: string }> {}

interface IOneBlogState {
  name: string;
}

export default OneBlog;
