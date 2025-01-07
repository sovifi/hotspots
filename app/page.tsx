import { Button } from "@/components/ui/button"
import { Wifi } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
      <Wifi className="h-16 w-16 mb-8 text-primary" />
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Welcome to Sovifi Hotspots
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        Connect and manage your social media presence in one place. Streamline your online interactions and boost your digital footprint.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/connections">View Connections</Link>
        </Button>
      </div>
    </div>
  )
}