import '@/components/Footer/Footer.sass'; 
const FooterComponent = () => {
  return (
    <footer className="footer-container" data-cursor-color="white">
      <p className="footer-text" data-cursor-color="white">
        Interested in collaborating or just want to say hi?
      </p>
      <p className='footer-text' data-cursor-color="white">I'd love to hear from you.</p>
      <a data-cursor-color="white" href="mailto:benkessas.benjamin@gmail.com" className="styled-button" target='_blank' rel="noopener noreferrer" role="button">Say Hello 😊</a>
    </footer>
  );
};

export default FooterComponent;
