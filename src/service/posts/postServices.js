import axiosInstance from "../../api/axios";

// Fetch all posts
export const fetchPosts = async () => {
  console.log("Backend API called, fetching posts...");
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw new Error("Unable to fetch posts");
  }
};

// Fetch a single post by ID
export const fetchPostById = async (id) => {
  console.log("Backend API called, fetching post by id...", id);
  try {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with id ${id}:`, error);
    throw new Error(`Unable to fetch post with id ${id}`);
  }
};

// Create a new post
export const createPost = async (data) => {
  console.log("Backend API called, creating posts...");
  try {
    const response = await axiosInstance.post("/posts", data);
    return response.data;
  } catch (error) {
    console.error("Failed to create post:", error);
    throw new Error("Unable to create post");
  }
};

// Update an existing post
export const updatePost = async (id, data) => {
  console.log("Backend API called, updating posts...");
  try {
    const response = await axiosInstance.put(`/posts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to update post with id ${id}:`, error);
    throw new Error(`Unable to update post with id ${id}`);
  }
};

// Delete a post by ID
export const deletePost = async (id) => {
  console.log("Backend API called, deleting posts...");
  try {
    const response = await axiosInstance.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete post with id ${id}:`, error);
    throw new Error(`Unable to delete post with id ${id}`);
  }
};
