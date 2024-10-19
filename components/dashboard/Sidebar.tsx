import React from 'react'
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/40 p-6 hidden md:block">
    <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Form
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Settings
      </Button>
    </nav>
  </aside>  
  )
}
