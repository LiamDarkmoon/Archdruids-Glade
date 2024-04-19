'use client'
import ApiGet from "@/lib/ApiGet"
import Button from "@/components/pure/Btn"
import { ChangeEvent, useState } from "react";

export default function UrlComponent() {
    const [url, setUrl] = useState('<https://api.tiendanube.com/v1/3734860/products?page=2>; rel="next", <https://api.tiendanube.com/v1/3734860/products?page=92>; rel="last"');

    const pagination = ApiGet(url);

    const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

  return (
    <form className="flex flex-col justify-center items-center p-6 gap-3 w-full h-screen bg-slate-200 text-rose-800">
      <label className="text-2xl font-semibold " htmlFor="url">URL</label>
      <input className="w-8/12 p-4 rounded-lg border placeholder-rose-950  border-rose-800" type="text" id="url" placeholder="https://api.tiendanube.com/v1/3734860/" onChange={ handleChange }/>
      {
        url && 
        <h1 className="overflow-y-auto">
            Paginas: { pagination.length }
        </h1>
      }
    </form>
  )
}
