import { useEffect, useState } from 'react'

type Props = {
  className?: string,
}

const App = ({className}: Props) => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async() => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
    setProducts(data.products)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className={className}>
      <h1>Pagination</h1>
      {products.length > 0 && products.slice(page * 10 - 10, page * 10).map((product: any) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        )
      })}

      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        {
          Array(products.length / 10).fill(0).map((_, index) => (
            <button key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </button>
          ))
        }
        <button onClick={() => setPage(page + 1)} disabled={page === products.length / 10}>
          Next
        </button>

      </div>
    </div>
  )
}

export default App