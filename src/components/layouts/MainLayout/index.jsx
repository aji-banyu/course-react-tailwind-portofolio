import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col overflow-x-hidden p-4 items-start justify-start">
      <Outlet/>
    </main>
  )
}

export default MainLayout