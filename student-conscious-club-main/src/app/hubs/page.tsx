import React from 'react'

export const metadata = {
  title: 'Hubs | Student Conscious Club'
}

export default function HubsPage() {
  return (
    <div className="py-24 container mx-auto px-6 max-w-6xl text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Academic & Creative Hubs</h1>
      <p className="text-muted-foreground mb-12">Explore our categorized knowledge and creative expression centers.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {["Mathematics Hub", "Chemistry Hub", "Technology & AI", "Research & Innovation", "Short Films & Media", "Writing & Poetry", "Mental Health"].map((hub) => (
          <div key={hub} className="p-6 border rounded-xl hover:border-primary transition-colors cursor-pointer bg-card">
            <h3 className="text-xl font-bold mb-2">{hub}</h3>
            <p className="text-sm text-muted-foreground">Access resources, discussions, and submissions related to {hub}.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
