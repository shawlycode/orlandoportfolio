import './footer.css'
import data from '../header/data'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <h4>All rights  reserved @ Orlando. | {year} | </h4>
      <div className="footer__socials">
        {data.map(item => <a href={item.link} key={item.id}>{item.icon}</a>)}
      </div>
    </footer>
  )
}

export default Footer
