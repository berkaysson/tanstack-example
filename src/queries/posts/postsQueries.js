import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  fetchPostById,
  fetchPosts,
  updatePost,
} from "../../service/posts/postServices";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

export const usePost = (id) =>
  useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (newItem) => {
      // fetching instantly after creation
      // queryClient.invalidateQueries({ queryKey: ["posts"] });

      // cache the new item, not fething after creation (optimistic update)
      queryClient.setQueryData(["posts"], (oldData) => [...oldData, newItem]);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: (deletedItem) => {
      // queryClient.invalidateQueries({ queryKey: ["posts"] });

      queryClient.setQueryData(["posts"], (oldData) =>
        oldData.filter((item) => item.id !== deletedItem.id)
      );
    },
  });
};
