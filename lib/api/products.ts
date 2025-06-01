import { Product } from "../types/types"

// GET
export async function fetchProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!apiKey || !apiUrl) {
    throw new Error(`Нету урла или апи ключа`)
  }

  try {
    const response = await fetch(`${apiUrl}/rest/v1/products`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (!response.ok) {
      throw new Error(`error status ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// POST
export async function createProduct(obj: Product) {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!apiKey || !apiUrl) {
    throw new Error(`Нету урла или апи ключа`)
  }
  /// ID QUERY PARAMETER UKAZAT
  try {
    const response = await fetch(`${apiUrl}/rest/v1/products`, {
      method: "POST",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(obj),
    })

    if (!response.ok) {
      throw new Error(`error status ${response.status}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// PATCH
export async function updateProduct(obj: Product) {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!apiKey || !apiUrl) {
    throw new Error(`Нету урла или апи ключа`)
  }
  /// ID QUERY PARAMETER UKAZAT
  try {
    const response = await fetch(`${apiUrl}/rest/v1/products`, {
      method: "PATCH",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })

    if (!response.ok) {
      throw new Error(`error status ${response.status}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// DELETE
export async function deleteProduct(id: number) {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!apiKey || !apiUrl) {
    throw new Error(`Нету урла или апи ключа`)
  }
  // ЗДЕСЬ ОБРАБОТАТЬ УКАЗАНИЕ АЙДИШНИКА
  try {
    const response = await fetch(`${apiUrl}/rest/v1/products?id=${id}`, {
      method: "DELETE",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
