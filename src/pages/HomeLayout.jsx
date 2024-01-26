import { Outlet,useNavigation } from "react-router-dom"
import { Header,Navbar ,Loading} from "../components"
const HomeLayout = () => {
  const navigation=useNavigation()
  const isPageloading = navigation.state === 'loading'
  return (
    <>
        <Header />
        <Navbar />
        {isPageloading ? (<Loading /> )
        : ( 
          <section className="align-element py-20">
        <Outlet />
        </section> 
        )}
            
        
       
    </>
  )
}

export default HomeLayout