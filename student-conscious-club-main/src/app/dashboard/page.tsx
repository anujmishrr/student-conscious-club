import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { GraduationCap, BookOpen, Calendar, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard | Student Conscious Club'
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  // Fetch profile to get role
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const role = profile?.role || 'Guest'

  return (
    <div className="container mx-auto px-6 py-12 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 border-r pr-6 space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {profile?.full_name?.charAt(0) || user.email?.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-sm truncate">{profile?.full_name || 'Student'}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
        </div>

        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mx-2">
          Role: <span className="uppercase ml-1">{role}</span>
        </div>

        <nav className="space-y-2 mt-8">
          <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted text-foreground font-medium">
            <GraduationCap className="h-4 w-4" /> Overview
          </Link>
          <Link href="/dashboard/submissions" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
            <BookOpen className="h-4 w-4" /> My Submissions
          </Link>
          <Link href="/events" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
            <Calendar className="h-4 w-4" /> RSVP Events
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </nav>

        <div className="pt-8 mt-8 border-t">
          <form action="/auth/signout" method="post">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md w-full text-left hover:bg-red-500/10 text-red-500 transition-colors">
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome back to the Student Conscious Club platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Active Hubs</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground mt-2">Enrolled academic modules</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Events</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground mt-2">Upcoming events you&apos;re attending</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" /> Certifications</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground mt-2">Verified completion certificates</p>
          </div>
        </div>

        {(role === 'founder' || role === 'core') && (
          <div className="p-6 border rounded-xl bg-primary/5 border-primary/20">
            <h3 className="font-bold text-lg mb-2">Admin Controls</h3>
            <p className="text-sm text-muted-foreground mb-4">You have elevated permissions to manage the platform.</p>
            <div className="flex gap-4">
              <Link href="/admin/events" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow">
                Manage Events
              </Link>
              <Link href="/admin/users" className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow hover:bg-muted">
                Manage Users
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
