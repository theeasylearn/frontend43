//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional component
function Menu()
{
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
        <div className="container">
          <a className="navbar-brand" href="#">My Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>)
}
function Slider()
{
    return (<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/1200/400?random=1" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/1200/400?random=2" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/1200/400?random=3" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>);
}
function Aboutus()
{
    return (<section id="about" className="bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p>Our company has been a leader in the industry for over a decade, dedicated to providing top-notch solutions that meet the needs of our diverse clientele. We pride ourselves on our innovative approach, leveraging cutting-edge technology to deliver exceptional results. Our team consists of highly skilled professionals who are passionate about what they do, ensuring that every project is handled with care and precision. From humble beginnings, we have grown into a trusted name, known for reliability and excellence. Our mission is to empower businesses by offering tailored services that drive success and foster long-term partnerships. We value integrity, transparency, and customer satisfaction above all else.</p>
        </div>
      </section>);
}
function Products()
{
    return (  <section id="products">
        <div className="container">
          <h2 className="text-center mb-4">Our Products</h2>
          <p>We offer a wide range of products designed to cater to various industries and needs. Each product is crafted with quality and innovation in mind, ensuring that our customers receive only the best. Our flagship product line includes advanced tools that streamline operations and boost productivity. We also provide customizable solutions to fit specific requirements, making us a preferred choice for businesses worldwide. Our commitment to research and development keeps us ahead of the curve, allowing us to introduce new features and improvements regularly. Whether you’re a small startup or a large corporation, our products are designed to scale with you, delivering unmatched performance and reliability every step of the way.</p>
        </div>
      </section>);
}
function Services()
{
    return (<section id="services" className="bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <p>Our services are tailored to meet the unique demands of our clients, offering comprehensive solutions that drive growth and efficiency. We specialize in consulting, implementation, and ongoing support, ensuring that every project is a success from start to finish. Our team works closely with clients to understand their goals and challenges, creating strategies that deliver measurable results. We also offer training programs to empower your staff with the skills they need to excel. With a focus on innovation, we incorporate the latest industry trends into our offerings, keeping you competitive in a fast-paced market. Our dedication to excellence ensures that you receive unparalleled service, every time.</p>
        </div>
      </section>);
}
function Testimonials()
{
    return ( <section id="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">Testimonials</h2>
          <p>Our clients’ satisfaction is our top priority, and their feedback speaks volumes about our commitment to quality. Over the years, we’ve had the privilege of working with businesses of all sizes, helping them achieve their goals with our solutions. Clients consistently praise our responsiveness, expertise, and ability to deliver on time and within budget. One customer noted that our team transformed their operations, making processes smoother and more efficient. Another highlighted our exceptional support, which made all the difference during a critical project. These testimonials inspire us to keep pushing the boundaries of what’s possible, ensuring that every client receives the best experience and results that exceed expectations.</p>
        </div>
      </section>);
}
function Contactus()
{
    return (<section id="contact" className="bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p>We’re here to help you succeed, and we’d love to hear from you. Whether you have questions about our products, need assistance with a service, or want to explore partnership opportunities, our team is ready to assist. You can reach us via phone, email, or through our online form, and we promise a prompt response. Our offices are located in the heart of the city, making it easy for you to visit us if needed. We value open communication and strive to build strong relationships with our clients. Let us know how we can support your goals, and we’ll work together to create solutions that drive success.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={4} required defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>)
}
function Footer()
{
    return (<footer className="text-center">
        <div className="container">
          <p>© 2025 MyWebsite. All Rights Reserved.</p>
        </div>
      </footer>);
}
function Site()
{
    return (<div>
        <Menu />
        {/* Slider */}
        <Slider />
        {/* About Us Section */}
        <Aboutus />
        {/* Products Section */}
        <Products />
        {/* Services Section */}
        <Services />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Contact Us Section */}
        <Contactus />
        {/* Footer Section */}
        <Footer />
      </div>
      );
}
root.render(<Site />);