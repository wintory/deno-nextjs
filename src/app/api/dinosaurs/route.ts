import dinosaurs from '@/constants/dinosaurs'

export const GET = () => {
  return Response.json(dinosaurs)
}
