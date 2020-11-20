import * as React from "react";
import { IBlog } from "../utils/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs: React.FC<IAllBlogsProps> = (props: IAllBlogsProps) => {
  let [blogs, setBlogs] = useState<IBlog[]>([]);

  const getBlogs = async () => {
    try {
      let r = await fetch("/api/blogs");
      let blogs = await r.json();
      setBlogs(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return blogs.map((blog) => (
    <Link to={`/details/${blog.id}`}>
      <div className="card m-5 shadow">
        <h1 className="text-primary text-center">{blog.title}</h1>
        <h4 className="text-primary text-center">{blog.content}</h4>
        <p className="text-primary text-center">written by {blog.name}</p>
      </div>
    </Link>
  ));
};

export interface IAllBlogsProps {}

export interface IAllBlogsState {
  name: string;
}

export default AllBlogs;
