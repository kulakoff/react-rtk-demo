import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

type Props = {};

const PostContainer = (props: Props) => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(15);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const handleCreatePost = async () => {
    const title = prompt();
    title === "" && alert("Заголовок не может быть пустым");
    title !== "" && (await createPost({ title, body: title } as IPost));
  };
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();

  return (
    <div className="postContainer">
      {isLoading && <h6>Загрузка ...</h6>}
      {error && <h6>{"Ошибка"}</h6>}
      {posts && (
        <>
          <div className="postActions">
            <button className="postActionBtn" onClick={() => refetch()}>
              refresh
            </button>
            <button className="postActionBtn" onClick={handleCreatePost}>
              add post
            </button>
          </div>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              remove={deletePost}
              update={updatePost}
            />
          ))}
        </>
      )}
      {/* {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))} */}
    </div>
  );
};

export default PostContainer;
