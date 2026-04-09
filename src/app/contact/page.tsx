import React from 'react'

export const metadata = {
  title: 'Contact | Student Conscious Club'
}

export default function ContactPage() {
  return (
    <div className="py-24 container mx-auto px-6 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground">We&apos;d love to hear from you. Send us a message.</p>
      </div>

      <form className="space-y-6 bg-card p-8 rounded-2xl border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <input className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <input className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="jane@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea rows={5} className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help you?"></textarea>
        </div>
        <button type="button" className="w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  )
}
