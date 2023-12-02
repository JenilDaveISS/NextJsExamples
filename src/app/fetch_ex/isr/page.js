"use server"

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/lms-6015/getProductDetails', { next: { revalidate: 60 } })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  // return JSON.stringify(res.json())
  return res.text()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main><h1 style={{color: "white"}}>{data}</h1></main>
}