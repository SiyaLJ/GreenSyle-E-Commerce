import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Welcome to Green Style</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Join us in supporting the "Go Green" campaign. Shop our handmade products from recyclable resources and
        contribute to a greener planet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Handmade Products</h2>
          <p className="mb-4">Discover our range of eco-friendly, handcrafted items made from recyclable materials.</p>
          <Link href="/projects">
            <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
          </Link>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Industrial Recycling</h2>
          <p className="mb-4">Sell your recycled waste to industrial customers and support the circular economy.</p>
          <Link href="/order">
            <Button className="bg-green-600 hover:bg-green-700">Start Selling</Button>
          </Link>
        </div>
      </div>
      <Image
        src="/GreenstyleLogo.jpeg"
        alt="Green Style Products"
        width={800}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  )
}


