import {
  useCreatePost,
  useDeletePost,
  usePosts,
  useUpdatePost,
} from "../queries/posts/postsQueries";

export const Posts = () => {
  const { data: posts, isPending, isError } = usePosts();
  const createPost = useCreatePost();
  const deletePost = useDeletePost();
  const updatePost = useUpdatePost();

  const handleCreatePost = () => {
    createPost.mutate(
      { title: "New Post " + Math.floor(Math.random() * 1000) },
      {
        onSuccess: () => {
          console.log("Post created successfully");
        },
        onError: (error) => {
          console.error("Error creating post:", error);
        },
      }
    );
  };

  const handleUpdatePost = (id) => {
    updatePost.mutate(
      {
        id,
        data: { title: "Updated Post " + Math.floor(Math.random() * 1000) },
      },
      {
        onSuccess: () => {
          console.log("Post updated successfully");
        },
        onError: (error) => {
          console.error("Error updating post:", error);
        },
      }
    );
  };

  const handleDeletePost = (id) => {
    deletePost.mutate(id, {
      onSuccess: () => {
        console.log("Post deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting post:", error);
      },
    });
  };

  if (isPending) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div className="container">
      <h1>Posts</h1>
      <button onClick={handleCreatePost}>Create Post</button>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              {post.title}

              <button onClick={() => handleUpdatePost(post.id)}>Edit</button>
              <button
                className="danger"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </li>
          ))}
        {posts.length === 0 && <p>No posts found</p>}
      </ul>
    </div>
  );
};
