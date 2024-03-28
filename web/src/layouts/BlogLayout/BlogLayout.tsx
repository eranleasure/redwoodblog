import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-8 sticky top-0 bg-gray-100">
        <h1 className="text-2xl font-bold">
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-8 min-h-dvh">{children}</main>
    </>
  )
}

export default BlogLayout
