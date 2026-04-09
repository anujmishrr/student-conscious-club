import React from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Student Conscious Club</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering students through academic exploration, creative expression, and conscious networking. Building the leaders of tomorrow.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/events" className="hover:text-foreground">Events</Link></li>
              <li><Link href="/hubs" className="hover:text-foreground">Academic Hubs</Link></li>
              <li><Link href="/gallery" className="hover:text-foreground">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Student Conscious Club. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed for the Future.
          </div>
        </div>
      </div>
    </footer>
  )
}
