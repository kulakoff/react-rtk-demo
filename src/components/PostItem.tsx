import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
  const hanleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title } as IPost);
  };

  return (
    <div className="post" onDoubleClick={handleUpdate}>
      {post.id} . {post.title}
      <button style={{ marginLeft: "1rem" }} onClick={hanleRemove}>
        del
      </button>
    </div>
  );
};

export default PostItem;
