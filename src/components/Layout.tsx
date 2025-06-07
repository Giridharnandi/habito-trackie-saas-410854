import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { useTheme } from '../hooks/useTheme'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}