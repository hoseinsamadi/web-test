import styled from './Navbar.module.css'
function Navbar() {
    let title = "Hosein BiBak";
    return (
        
        <div className={styled.header}>
            <h3>{title}</h3>
            <ul>
                <li>لیست مقالات</li>
                <li>مقاله جدید</li>
                <li>دربازه</li>
            </ul>
        </div>
    );
}
export default Navbar