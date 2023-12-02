'use client'
 
import { useEffect, useState } from 'react'
 
export default function Example() {
  const [data, setData] = useState("Temp");
  useEffect(() => {
    console.log('in useEffect')
    setTimeout(()=> {
      setData("Non temp")
    }, 5000)
  }, [])
  return <p>Hello world : {data}</p>
}