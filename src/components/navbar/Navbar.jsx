import styled from './Navbar.module.css'
function Navbar(props) {
    console.log(props);
    return (
        <div className={styled.headerWarpper}>
            <div className="container">
                <div className={styled.header}>
                    <h3>{props.title}</h3>
                    <ul>
                        <li>لیست مقالات</li>
                        <li>مقاله جدید</li>
                        <li>دربازه</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default Navbar