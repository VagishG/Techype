import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Menu, Search } from "lucide-react"
export default function TopBar() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-4 md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Techbyte</h1>
      </div>
      <div className="flex items-center space-x-4">
        <form className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 md:w-[300px] lg:w-[300px]"
          />
        </form>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
