import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-green-800">About Green Style</h1>
      <div className="mb-8">
        <Image
          src="/Greenstyle Team.png"
          alt="Green Style Team"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-4"
        />
        <p className="text-lg mb-4">
          Green Style is an innovative e-commerce platform dedicated to supporting the "Go Green" campaign launched by
          the Department of Environmental Affairs. Our mission is to promote sustainability by offering handmade
          products made from recyclable resources and facilitating the sale of recycled waste to industrial customers.
        </p>
        <p className="text-lg mb-4">
          By choosing Green Style, you're not just buying products—you're contributing to a greener planet. We believe
          that small changes in our daily lives can lead to significant positive impacts on our environment.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Location</h2>
        <p className="text-lg mb-4">
        GreenStyle is located at Robert Sobukwe Road, Bellville 7535 Cape Town. We exist to address the problem of
        environmental sustainability in South Africa, particularly the issue of littering and illegal dumping of waste
        in conjuction with the Department of Environmental Affairs launched the "Go Green" campaign,which aims to promote
        sustainable living practices. </p>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Commitment</h2>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">Sourcing eco-friendly and recyclable materials for all our products</li>
        <li className="mb-2">Supporting local artisans and promoting fair trade practices</li>
        <li className="mb-2">Minimizing waste in our production and packaging processes</li>
        <li className="mb-2">Educating our community about sustainable living</li>
        <li className="mb-2">Continuously innovating to reduce our environmental footprint</li>
      </ul>
      <p className="text-lg">
        Join us in our mission to create a more sustainable future. Every purchase you make and every item you recycle
        through Green Style brings us one step closer to a cleaner, greener world.
      </p>
    </div>
  )
}

