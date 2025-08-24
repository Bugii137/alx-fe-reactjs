// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchPosts = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    // Advanced React Query options
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 30, // 30 seconds
    refetchOnWindowFocus: true, // refetch on focus
    keepPreviousData: true, // <-- keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts (Page {page})</h2>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="list-disc pl-5">
        {data.map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostsComponent;
