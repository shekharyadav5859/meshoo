import { useEffect, useRef, useState } from "react";

export const InfiniteScrollObserver=()=> {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const data = await res.json();
    setItems((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-4">
      {items.map((item) => (
        <p key={item.id} className="border-b p-2">{item.title}</p>
      ))}
      <div ref={loaderRef} className="text-center p-4">Loading...</div>
    </div>
  );
}
