export default function Page({ params }: { params: { name: string } }) {
  return (
    <div>
      Pokemon detail page for name: { params.name }
    </div>
  )
}