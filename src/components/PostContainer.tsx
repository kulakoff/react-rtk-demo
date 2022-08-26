import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

type Props = {};

const PostContainer = (props: Props) => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(5);
  return (
    <>
      {isLoading && <h6>Загрузка ...</h6>}
      {error && <h6>{"Ошибка"}</h6>}
      {posts && (
        <>
          <button onClick={() => refetch()}>refresh</button>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </>
      )}
      {/* {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))} */}
    </>
  );
};

export default PostContainer;
