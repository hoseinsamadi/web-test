import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
function Home(){
    let articles = [
        {
            id:1,
            imageUrl:"",
            title: "عنوان اول",
            readingTime: 5
        },
        {
            id:2,
            imageUrl:"",
            title: "عنوان دوم",
            readingTime: 3
        },
        {
            id:3,
            imageUrl:"",
            title: "عنوان سوم",
            readingTime: 8
        }
    ];
    return(
        <div className={styled.homeWarpper}>
            <Navbar title = "حسین بلاگ"/>
             <div className="container">
                    <h2>
                        مقالات پیشنهادی
                    </h2>
                    <div className= {styled.articleW}>
                        {
                            articles.map(result => (
                                <Article/>
                            ))
                        }
                        

                    </div>
             </div>
        </div>
    );
}
export default Home;