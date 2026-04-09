import React from 'react'

export const metadata = {
  title: 'About | Student Conscious Club'
}

export default function AboutPage() {
  return (
    <div className="py-24 container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Discover the Vision and Mission driving the Student Conscious Club.
        </p>
      </div>

      <div className="space-y-16">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold border-b pb-2">Our Vision</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            To create a comprehensive, universally accessible ecosystem that nurtures talent, encourages academic brilliance, and fosters creative arts. We believe that true education extends beyond the classroom into real-world applications, collaborative innovations, and conscious living.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold border-b pb-2">Our Mission</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-muted-foreground">
            <li><strong className="text-foreground">Academic Excellence:</strong> Create open-source academic hubs where knowledge is shared freely.</li>
            <li><strong className="text-foreground">Creative Expression:</strong> Provide stages—both digital and physical—for poetry, art, short films, and open mics.</li>
            <li><strong className="text-foreground">Holistic Development:</strong> Prioritize mental health awareness, cognitive skills, and future technology integrations.</li>
            <li><strong className="text-foreground">Permanent Archival:</strong> Maintain a systematic, year-wise history of our legacy, ensuring continuous growth.</li>
          </ul>
        </section>

        <section className="bg-muted p-8 rounded-2xl border text-center">
          <h3 className="text-2xl font-bold mb-4">Want to be a part of the journey?</h3>
          <p className="text-muted-foreground mb-6">Join thousands of students building the future today.</p>
          <a href="/register" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Register Now
          </a>
        </section>
      </div>
    </div>
  )
}
