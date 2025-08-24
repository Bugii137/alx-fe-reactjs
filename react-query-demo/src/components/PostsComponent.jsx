// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    // Advanced React Query options
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 30, // 30 seconds
    refetchOnWindowFocus: true, // refetch when tab regains focus
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul className="list-disc pl-5">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
