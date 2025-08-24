import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,     // data considered fresh for 1 minute
      cacheTime: 5 * 60 * 1000, // keep in cache for 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 800, margin: "24px auto", padding: 16 }}>
        <h1>React Query Demo — Posts</h1>

        {/* Unmount/remount to demonstrate cache usage */}
        <button onClick={() => setShowPosts((s) => !s)} style={{ marginBottom: 12 }}>
          {showPosts ? "Hide" : "Show"} Posts
        </button>

        {showPosts && <PostsComponent />}
      </div>

      {/* Helpful during review; safe to include */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
