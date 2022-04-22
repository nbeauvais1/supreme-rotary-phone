import {useState, useEffect} from 'react'

import PageTitle from '../components/PageTitle/PageTitle';
import {Button} from '../components/Button';



export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  console.log("home render")
  
  useEffect(()=>{  
    console.log("useEffect")  
    async function loadExternalDataTheCRAWay(){
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await res.json()
      console.log(data)

    }
    loadExternalDataTheCRAWay()
  }, [])

  return (
    <>
      <PageTitle title="GoofyStore" tagline="Goofy featured products"/> 
      <div style={{textAlign:"center"}}>
      <Button 
      style={{margin:"2rem 0 0",}}
      onClick={()=>setIsLoading(!false)}
      >Get Some Data</Button>
      {
        isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>
      }
      </div>
      <main>

      </main>
    </>
  )}
