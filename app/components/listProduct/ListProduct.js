"use client";
import { useEffect, useState, useRef } from "react";
import ProductSkeleton from "../product/ProductSkeleton";
import Product from "../product/Product";

export default function ListProduct({ size = 8, category }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(size - 1);
  const observer = useRef();
  const loadMoreTriggerRef = useRef();
  const fetchIdRef = useRef(0);

  const fetchProducts = async () => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);
    const range = `${firstIndex}-${lastIndex}`;
    const filter = `category=eq.${category}`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rest/v1/products?${filter}&select=*`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Range: range,
        },
      }
    );
    if (fetchId !== fetchIdRef.current) return; // Ignore outdated responses
    const data = await response.json();
    setLoading(false);
    if (data.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setFirstIndex((prevFirstIndex) => prevFirstIndex + size);
      setLastIndex((prevLastIndex) => prevLastIndex + size);
    }
  };

  useEffect(() => {
    fetchProducts();

    // Limpiar el estado cuando el componente se desmonte
    return () => {
      setProducts([]);
      setFirstIndex(0);
      setLastIndex(size - 1);
      setHasMore(true);
    };
  }, [category]);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    observer.current = new IntersectionObserver(callback);
    if (loadMoreTriggerRef.current) {
      observer.current.observe(loadMoreTriggerRef.current);
    }
  }, [loading, hasMore]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            className="hover:scale-110"
          />
        ))}
        {loading && (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        )}
      </div>
      {hasMore && !loading && (
        <div
          ref={loadMoreTriggerRef}
          id="load-more-trigger"
          className="h-1"
        ></div>
      )}
    </div>
  );
}
