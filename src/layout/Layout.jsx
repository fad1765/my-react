import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import '../styles/Layout.css'
import Footer from "../components/Footer";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(prev => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="layout">
      <Header toggleSidebar={toggleSidebar} />

      {/* 🔥 遮罩 */}
      {isSidebarOpen && (
        <div className="overlay" onClick={closeSidebar}>
          <Sidebar />
        </div>
      )}

      <main className="main-content">{children}</main>
       <Footer />
    </div>
  )
}
