"use client"

import React, { useEffect, useState } from "react"
import { Products } from "@/lib/types/types"
import { fetchProducts } from "@/lib/api/products"
import Modal from "@/modules/Modal/Modal"

export default function Home() {
  const [products, setProducts] = useState<Products | []>([])

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data) setProducts(data)
    })
  }, [])

  return (
    <>
      <Modal />
      <h1> hello </h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <p>Имя: {item.name}</p>
            <p>Описание: {item.description}</p>
            <p>Цена: {item.price}</p>
            <p></p>
            <p></p>
            <p></p>
          </li>
        ))}
      </ul>
    </>
  )
}
