import React from 'react'

export const metadata = {
  title: 'Events | Student Conscious Club'
}

export default function EventsPage() {
  return (
    <div className="py-24 container mx-auto px-6 max-w-6xl text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Upcoming Events</h1>
      <p className="text-muted-foreground mb-12">Join us in workshops, guest sessions, and networking events.</p>
      
      <div className="bg-muted border border-border mt-8 p-12 rounded-xl border-dashed">
        <p className="text-muted-foreground">No upcoming events scheduled right now. Check back later!</p>
      </div>
    </div>
  )
}
