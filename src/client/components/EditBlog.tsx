import * as React from "react";
import { IBlog } from "../utils/types";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

const EditBlog: React.FC<IEditBlogProps> = (props: IEditBlogProps) => {
  let [blog, setBlog] = useState<IBlog>();
  // const { id } = useParams();
 
  const getBlog = async () => {
    try {
      let r = await fetch(`/api/blogs/${props.match.params.id}`);
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
      <input
        type="text"
        placeholder={blog.title}
        className="text-primary text-center"
      ></input>
      <input
        type="text"
        placeholder={blog.content}
        className="text-primary text-center"
      >
        {blog.content}
      </input>
      <h1 className="text-primary text-center">written by {blog.name}</h1>
    </main>
  );
};

export interface IEditBlogProps extends RouteComponentProps<{ id: string }> {}

export interface IEditBlogState {
  name: string;
}

export default EditBlog;
