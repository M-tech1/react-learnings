import { useEffect, useState } from "react";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disablBtn, setDisablBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=100&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && products.length === 10) setDisablBtn(true);
  }, [products]);

  if (loading) {
    return (
      <>
        <div>Loading data! Please holdOn...</div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate p-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-5">
          {products && products.length ? (
            products.map((items, index) => (
              <div
                className="bg-slate-200 rounded-xl p-5  flex flex-col items-center just"
                key={index.id}
              >
                <img src={items.thumbnail} alt={items.title} />
                <p>{items.title}</p>
              </div>
            ))
          ) : (
            <div>sorry this didnt load</div>
          )}
        </div>
        <div className="flex flex-row justify-between  gap-10 mt-10">
          <button
            className="w-[10rem] h-10 bg-blue-400 rounded-full cursor-pointers hover:bg-blue-700 "
            disabled={disablBtn}
            onClick={() => setCount(count - 1)}
          >
            previous
          </button>
          <button
            className="w-[10rem] h-10 bg-blue-400 rounded-full cursor-pointers hover:bg-blue-700 "
            disabled={disablBtn}
            onClick={() => setCount(count + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default LoadMore;
