import TestScene from './components/three/TestScene'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-3xl text-center pt-10">
        SKD Holidays 3D Test 🚀
      </h1>

      <TestScene />
    </main>
  )
}