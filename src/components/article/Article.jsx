import styled from "./article.module.css"
import jsi from "./../../assets/images/js.jpeg"

function Article() {
    return (
        <div className={styled.articlewarpper}>
           <img src={jsi} />
           <h3>این یک پروزه ریکت است</h3>
           <p>این خواندن 5 دقیقه ای است</p>
        </div>
    );
}
export default Article;