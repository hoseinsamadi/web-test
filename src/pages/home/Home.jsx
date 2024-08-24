import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
import axios from "axios";
function Home() {
    const [articles, setArticles] = useState([])
    useEffect(() => {

       axios
       .get("http://localhost:8000/articles")
       .then((result) => {
        setArticles(result.data.data);

       })
       .catch((error) => {
        console.log(error);
       });
    
    }, []);
    return (
        <div className={styled.homeWarpper}>
            <Navbar title="حسین بلاگ" />
            <div className="container">
                <h2>
                    مقالات پیشنهادی
                </h2>
                <div className={styled.articleW}>
                    {
                        articles.map(article =>
                        (
                            <Article key={article.id} article={article} />
                        ))

                    }


                </div>
            </div>
        </div>
    );
}
export default Home;