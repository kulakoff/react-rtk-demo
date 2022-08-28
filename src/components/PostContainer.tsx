import { ThreeCircles } from "react-loader-spinner";
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
  } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const handleCreatePost = async () => {
    const title = prompt();
    title === "" && alert("Заголовок не может быть пустым");
    title !== "" && (await createPost({ title, body: title } as IPost));
  };
  const [updatePost, { isLoading: isUpdateLoading }] =
    postAPI.useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleteLoading }] =
    postAPI.useDeletePostMutation();

  return (
    <div className="App">
      <ThreeCircles
        height="100"
        width="100"
        color="teal"
        wrapperStyle={{}}
        wrapperClass="App"
        visible={isLoading}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />

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
