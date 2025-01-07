const Footer = () => {
  return (
    <footer className="flex justify-evenly bottom-0 w-full bg-gray-100">
      <div className="py-20">
        <h3>FAQ</h3>
        <p>What is UpScale?</p>
        <p>How can use UpScale?</p>
      </div>
      <div className="py-20">
        <h3>Contact us</h3>
        <p>Tel: xxxxxxxx</p>
        <p>email: Admin@upspace.com</p>
        <form action="">
          <input type="text" placeholder="Write your message" />
        </form>
      </div>
      <div className="py-20 hidden">
        <h3>Follow Us</h3>
      </div>
    </footer>
  );
};

export default Footer;
