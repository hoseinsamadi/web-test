import styled from "./article.module.css"
import aricle from "./../../assets/images/js.jpeg"

function Article(props) {
    console.log(props.article)
    return (
        <div className={styled.articlewarpper}>
           <img src={props.article.imageUrl} />
           <h3>{props.article.title}</h3>
           <p>این خواندن {props.article.readingTime} دقیقه ای است</p>
        </div>
    );
}
export default Article;