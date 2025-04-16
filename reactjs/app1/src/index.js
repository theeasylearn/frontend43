//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
class IPhone extends React.Component
{
  render()
  {
    return (<div className="container my-5">
      <div className="card shadow-lg iphone-card">
        <div className="row g-0">
          <div className="col-md-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLOR208QdW7p_5u8Y8RbLC3pg2Tp9rR08EuMvfvTLep1yhsfTG_PytKxphvcpAppEQdc&usqp=CAU" className="img-fluid rounded-start" alt="iPhone 16 Pro Max" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title">iPhone 16 Pro Max</h2>
              <p className="text-muted">The future is Pro.</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><strong>Display:</strong> 6.9‑inch Super Retina XDR display</li>
                <li className="list-group-item"><strong>Chip:</strong> A18 Pro Bionic Chip</li>
                <li className="list-group-item"><strong>Camera:</strong> Triple 48MP Pro Camera System</li>
                <li className="list-group-item"><strong>Storage:</strong> 256GB / 512GB / 1TB</li>
                <li className="list-group-item"><strong>Battery Life:</strong> Up to 30 hours video playback</li>
                <li className="list-group-item"><strong>Operating System:</strong> iOS 18</li>
                <li className="list-group-item"><strong>Price:</strong> ₹1,49,900*</li>
              </ul>
              <a href="#" className="btn btn-primary">Buy Now</a>
              <a href="#" className="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
root.render(<IPhone />);