import { Header } from '@/components/header'

export default async function Home() {
  return (
    <div className="mx-auto w-full max-w-[1200px] py-4 pt-6">
      <Header />
      <h1 className="text-2xl font-bold">Project</h1>
    </div>
  )
}
