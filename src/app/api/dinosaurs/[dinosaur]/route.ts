import dinosaurs from '@/constants/dinosaurs'
import { NextRequest } from 'next/server'

type RouteParams = { params: Promise<{ dinosaur: string }> }

export const GET = async (_: NextRequest, { params }: RouteParams) => {
  const { dinosaur } = await params

  if (!dinosaur) {
    return Response.json('No dinosaur name provided.')
  }

  const dinosaurData = dinosaurs.find(
    (item) => item.name.toLowerCase() === dinosaur.toLowerCase()
  )

  return Response.json(dinosaurData ? dinosaurData : 'No dinosaur found.')
}
