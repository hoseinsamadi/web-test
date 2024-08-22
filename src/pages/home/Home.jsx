import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
function Home(){
    return(
        <div className={styled.homeWarpper}>
            <Navbar title = "حسین بلاگ"/>
             <div className="container">
                    <h2>
                        مقالات پیشنهادی
                    </h2>
                    <div className= {styled.articleW}>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    </div>
             </div>
        </div>
    );
}
export default Home;