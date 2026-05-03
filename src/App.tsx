import { useEffect, useState } from "react"
import HomePage from "./pages/HomePage"
import SiteLoader from "./components/SiteLoader"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Safety: in case loader callback doesn't fire for any reason
    const t = window.setTimeout(() => setLoading(false), 2200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      {loading ? (
        <SiteLoader durationMs={1600} onDone={() => setLoading(false)} />
      ) : null}
      <HomePage />
    </>
  )
}
