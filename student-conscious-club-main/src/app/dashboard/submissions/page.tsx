import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { UploadCloud, FileText } from 'lucide-react'

export const metadata = {
  title: 'My Submissions | Student Conscious Club'
}

export default async function SubmissionsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: resources } = await supabase
    .from('academic_resources')
    .select('*')
    .eq('uploaded_by', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto px-6 py-12 flex-1 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Submissions</h1>
        <p className="text-muted-foreground mt-2">Manage your uploaded academic notes, projects, and media.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UploadCloud className="text-primary w-5 h-5"/> Upload New Resource
          </h2>
          <form className="space-y-4" action="/api/upload" method="POST" encType="multipart/form-data">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <input name="title" className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required placeholder="Calculus 101 Notes" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select name="category" className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Mathematics Hub</option>
                <option>Chemistry Hub</option>
                <option>Physics Hub</option>
                <option>Writing & Poetry</option>
                <option>Short Films</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">File</label>
              <input type="file" name="file" className="w-full px-3 py-2 border rounded-md bg-background" required />
            </div>
            <button className="w-full bg-primary text-primary-foreground h-10 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Submit Resource
            </button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Uploading requires a connected Supabase Storage bucket.
            </p>
          </form>
        </div>

        <div className="bg-card border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Your Past Submissions</h2>
          {resources && resources.length > 0 ? (
            <ul className="space-y-3">
              {resources.map((res: Record<string, any>) => (
                <li key={res.id} className="flex items-center justify-between p-3 border rounded-lg bg-background">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{res.title}</p>
                      <p className="text-xs text-muted-foreground">{res.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {new Date(res.created_at).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-12 border border-dashed rounded-lg bg-muted/50">
              <p className="text-muted-foreground text-sm">You haven&apos;t submitted anything yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
