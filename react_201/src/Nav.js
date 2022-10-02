import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import{ faFacebook, faGithub, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'

function Nav(){
    return(
        <>
        <nav>
            <div className="logo" id="logo">
                <img src='./img/my brand.jpg' />
            </div>
            <ul className= 'options' id='option'>
                <li>
                    <a className="nav" id='nav'>
                        <FontAwesomeIcon icon={faBarChart} className= 'font'/>
                    </a>
                    <ul className='option-menu'>
                       <li><a>HOME</a></li>
                       <li><a>ABOUT</a></li>
                       <li><a>CONTACT</a>
                            <ul className='option-apps'>
                                <li><a href="https://www.facebook.com/james.favour.73157"><FontAwesomeIcon icon={faFacebook} className= 'font'/></a></li>
                                <li><a href="https://www.github.com/James-favour"><FontAwesomeIcon icon={faGithub} className= 'font'/></a></li>
                                <li><a href="https://www.twitter.com/Savage_Sliim"><FontAwesomeIcon icon={faTwitter} className= 'font'/></a></li>
                                <li><a href="https://wa.me/07067363620"><FontAwesomeIcon icon={faWhatsapp} className= 'font'/></a></li>
                            </ul>
                            </li>
                    </ul>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Nav