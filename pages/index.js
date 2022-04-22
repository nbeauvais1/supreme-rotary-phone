import {useState, useEffect} from 'react'

import PageTitle from '../components/PageTitle/PageTitle';
import {Button} from '../components/Button';
import {User} from '../components/User'


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([])

  useEffect(()=>{  
    async function loadExternalDataTheCRAWay(){
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await res.json()
      setUserData(data)
    }
    loadExternalDataTheCRAWay()
  }, [])

  return (
    <>
      <PageTitle title="GoofyStore" tagline="Goofy featured products"/> 
      <div style={{textAlign:"center"}}>
      <Button onClick={()=>setIsLoading(true)} >Get Some Data</Button>
      {
        isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>
      }
      </div>
      <main>
        {
          userData.map(({id, name, email, username}) => <User Key={id} name={name} email={email} username={username}/> )
        }
      </main>
    </>
  )}
