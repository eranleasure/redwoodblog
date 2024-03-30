import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="bg-gray-700 text-gray-50">
      <header className="flex justify-between items-center py-4 px-8 sticky top-0 bg-gray-800">
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
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <div>
            <span>Logged in as {currentUser.email}</span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>Login</Link>
        )}
      </header>
      <main className="p-8 min-h-dvh">{children}</main>
    </div>
  )
}

export default BlogLayout
