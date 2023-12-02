'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent({ params }) {
  const pathname = usePathname()
  return <p>Current pathname: {pathname} or name: {params.slug}</p>
}
