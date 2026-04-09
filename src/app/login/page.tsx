import Link from 'next/link'
import { login } from './actions'

export const metadata = {
  title: 'Sign In | Student Conscious Club'
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LoginPage(props: Props) {
  const searchParams = await props.searchParams
  const message = searchParams?.message as string | undefined

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto pt-24 pb-32">
      <Link
        href="/"
        className="absolute left-8 top-24 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={login}
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Sign in to your account</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-md px-4 py-2 bg-inherit border mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-md px-4 py-2 bg-inherit border mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {message && (
          <p className="mt-4 p-4 bg-red-500/10 text-red-500 text-center text-sm rounded-md border border-red-500/20">
            {message}
          </p>
        )}

        <button className="bg-primary text-primary-foreground font-medium rounded-md px-4 py-2 mt-6 mb-2 hover:bg-primary/90 transition-colors">
          Sign In
        </button>
        <div className="text-center text-sm text-muted-foreground mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register now
          </Link>
        </div>
      </form>
    </div>
  )
}
