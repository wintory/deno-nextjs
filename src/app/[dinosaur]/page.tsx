'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type RouteParams = { params: Promise<{ dinosaur: string }> }

export default function Dinosaur({ params }: RouteParams) {
  const selectedDinosaur = params.then((params) => params.dinosaur)
  const [dinosaur, setDino] = useState({ name: '', description: '' })

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`/api/dinosaurs/${await selectedDinosaur}`)
      const dino = await resp.json()
      setDino(dino)
    }

    getData()
  }, [])

  return (
    <main className="flex flex-col items-center gap-8 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.description}</p>

      <Link href="/">
        <div className="cursor-pointer rounded-md bg-gray-100 p-4 text-black">
          Back to all dinosaurs
        </div>
      </Link>
    </main>
  )
}
