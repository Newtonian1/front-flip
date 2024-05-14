import HomeIcon from '@mui/icons-material/Home'
import "../css/Header.css"

function Header(props: {title: string}) {
    return (
        <div className='header'>
            <a href="/" className='icon'>
                <HomeIcon id='home-icon'/>
            </a>
            <a href={"/" + props.title}><h3 id="page-title">{props.title}</h3></a>
            <div className='icon placeholder'></div>
        </div>
    )
}

export default Header