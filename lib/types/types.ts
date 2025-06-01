export type Product = {
   id: number;
   created_at: Date;
   name: string;
   price: number;
   slug: string;
   description?: string | null;
   category?: string | null;
   inStock?: boolean;
   sale?: number;
   stock_quant?: number;
};

export type Products = Product[];