import './footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <h3>All rights  reserved @ Orlando. | {year}</h3>
    </footer>
  )
}

export default Footer
