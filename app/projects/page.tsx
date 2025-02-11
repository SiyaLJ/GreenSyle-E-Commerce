import Image from "next/image"
import { Button } from "@/components/ui/button"
import { products } from "../data/products"

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-green-800">Our Eco-Friendly Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">R{product.price.toFixed(2)}</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  )
}



