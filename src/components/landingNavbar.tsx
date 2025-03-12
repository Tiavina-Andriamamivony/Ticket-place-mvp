import Link from "next/link"


export default function LandingNavbar() {
  return (
    <nav className="flex justify-between items-center py-4 mr-8 ml-8 pb-9 w-11/12">
      <Link className="text-xl text-white" href="/">Logo</Link>
      <div className="flex justify-between items-center space-x-4 gap-3">
      <Link href="/sign-in" className="text-white">Log in</Link>
      <Link href="/sign-up" className="text-white">Sign up</Link>
        </div>
    </nav>
  )
}
