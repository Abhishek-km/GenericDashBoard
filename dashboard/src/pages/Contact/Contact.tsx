import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page" style={{backgroundColor:"#007bff"}}>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us using the form below or through our contact details.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message"  required></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Send Message</button>
        </form>
      </section>

      <section className="contact-details">
        <h2>Our Contact Details</h2>
        <p>Email: support@propertymanager.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Property Lane, Housing City, USA</p>
      </section>
    </div>
  );
}