import Navbar from "../../components/navbar/Navbar"

function Home(){
    return(
        <div>
            <Navbar title = "حسین بلاگ"/>
             <div className="container">
                <h3 style={{textAlign:"right"}}>Home</h3>
             </div>
        </div>
    );
}
export default Home;