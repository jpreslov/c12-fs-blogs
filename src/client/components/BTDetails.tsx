import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, RouteComponentProps } from "react-router";

const BTDetails: React.FC<IBTDetailsProps> = (props) => {
  const [blogIds, setBlogids] = useState<BTDetailsState>([]);
  const [blogs, setBlogs] = useState<BTDetailsState>([]);

  const getBlogIds = async () => {
    try {
      let r = await fetch(`/api/tags/${props.match.params.name}`);
      let ids = await r.json();
      setBlogids(ids);
    } catch (err) {
      console.error(err);
    }
  };

  const getBlogs = async () => {
    try {
      let arr = [];
      arr.push(blogIds);
      let s = await fetch(`/api/blogs/${arr}`);
      let blogs = await s.json();
      setBlogs(blogs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogIds();
    getBlogs();
  }, []);

  return (
    <>
      <p>Showing blogs tagged: "{props.match.params.name}"</p>
      {blogs.map((blog) => {
        return (
          <>
            <main className="card m-5 shadow">
              <h1 className="card-title text-primary text-center">
                {blog.title}
              </h1>
              <h4 className="card-body text-primary text-center">
                {blog.content}
              </h4>
              <p className="text-primary text-center">written by {blog.name}</p>
            </main>
          </>
        );
      })}
    </>
  );
};

interface IBTDetailsProps extends RouteComponentProps<{ name: string }> {}
interface BTDetailsState {}

export default BTDetails;
