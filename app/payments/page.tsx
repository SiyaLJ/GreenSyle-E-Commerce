"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Payments() {
  const [showDialog, setShowDialog] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log("Payment processed successfully")
    setShowDialog(true)
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Payment Method</h2>
          <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-4">
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <Input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <Input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <Input type="text" id="cvv" name="cvv" placeholder="123" required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700 mb-1">
            Name on Card
          </label>
          <Input type="text" id="name-on-card" name="name-on-card" required />
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Pay Now
        </Button>
      </form>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Successful!</DialogTitle>
            <DialogDescription>
              Thank you for your purchase. Your order has been confirmed and will be processed shortly.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => router.push("/")} className="bg-green-600 hover:bg-green-700">
              Return to Homepage
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}



