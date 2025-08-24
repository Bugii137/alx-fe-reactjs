import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery("posts", fetchPosts, {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {String(error?.message || error)}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <button onClick={() => refetch()}>Refetch</button>
        {isFetching ? <span>Updating…</span> : <span>Up to date</span>}
      </div>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 8 }}>
            <strong>#{post.id}</strong> — {post.title}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 12, fontStyle: "italic" }}>
        Tip: Click “Hide Posts” in App, then “Show Posts” again — data should appear instantly from cache (if within stale/cache times).
      </p>
    </div>
  );
}
