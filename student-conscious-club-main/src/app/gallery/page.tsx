import React from 'react'

export const metadata = {
  title: 'Gallery | Student Conscious Club'
}

export default function GalleryPage() {
  return (
    <div className="py-24 container mx-auto px-6 max-w-6xl text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Gallery & Archives</h1>
      <p className="text-muted-foreground mb-12">A look back at our history, achievements, and memorable moments.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-muted rounded-xl border flex items-center justify-center overflow-hidden relative group">
            <span className="text-muted-foreground">Image Placeholder {i}</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  )
}
