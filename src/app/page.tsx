'use client'

import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const response = await fetch(`/api/dinosaurs`)
      const allDinosaurs = await response.json()
      setDinosaurs(allDinosaurs)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-[32px]">Welcome to the Dinosaur app</h1>
        <div className="grid h-[calc(100vh-400px)] w-[950px] grid-cols-2 gap-4 overflow-auto md:grid-cols-4">
          {isLoading ? (
            <div className="text-[24px]">Loading...</div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              {dinosaurs.map((dinosaur: any) => {
                return (
                  <Link
                    key={dinosaur.name}
                    href={`/${dinosaur.name.toLowerCase()}`}
                  >
                    <div className="cursor-pointer rounded-md bg-gray-100 p-4 text-center text-black hover:border hover:border-white hover:bg-transparent hover:text-white">
                      {dinosaur.name}
                    </div>
                  </Link>
                )
              })}
            </Suspense>
          )}
        </div>
      </main>
    </div>
  )
}
