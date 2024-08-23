import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
function Home(){
    let articles = [
        {
            id:1,
            imageUrl:"http://www.shodor.org/~michaeld/portfolio/Classwork/birdQuarterQ-100.jpg",
            title: "عنوان اول",
            readingTime: 5
        },
        {
            id:2,
            imageUrl:"https://cdn.pixabay.com/photo/2022/11/30/20/38/cat-7627628_640.jpg",
            title: "عنوان دوم",
            readingTime: 3
        },
        {
            id:3,
            imageUrl:"https://cdn.pixabay.com/photo/2023/05/11/04/54/squirrel-7985502_640.jpg",
            title: "عنوان سوم",
            readingTime: 8
        },
        {
            id:4,
            imageUrl:"https://media.istockphoto.com/id/466395505/photo/red-squirrel-looking-around-a-tree.jpg?s=612x612&w=0&k=20&c=xqKMBPgN9zbsyqat2Q9ubnA7bzIjOw8XnZ-Ze_BcUiI=",
            title: "عنوان چهارم",
            readingTime: 12
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
                            articles.map(article =>
                              (
                                <Article key = {article.id} article={article}/>
                            ))

                        }
                        

                    </div>
             </div>
        </div>
    );
}
export default Home;