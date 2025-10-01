import { useEffect, useState } from "react";

export const InfiniteScroll=()=> {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  // API call
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const data = await res.json();
    setItems((prev) => [...prev, ...data]); // purane + naye
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Scroll check
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1); // next page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4">
      {items.map((item) => (
        <p key={item.id} className="border-b p-2">
          {item.title}
        </p>
      ))}
      <p className="text-center">Loading...</p>
    </div>
  );
}

