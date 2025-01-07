"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Wifi, User, Settings, LogOut } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Wifi className="h-6 w-6" />
              <span className="font-bold text-xl">Sovifi</span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                Dashboard
              </Link>
              <Link href="/connections" className={`${pathname === '/connections' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                Connections
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}