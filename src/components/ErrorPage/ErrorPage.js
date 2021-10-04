import React from 'react';

const ErrorPage = () => {
    return (
        <div className="text-center mt-5 mb-5 container w-25">
             <div className="card text-white bg-secondary mb-3" style={{maxWidth: "18rem"}}>
  <div class="card-header">Page Not found</div>
  <div class="card-body">
    <h5 class="card-title">404 not found</h5>
    <p class="card-text">The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. </p>
  </div>
</div> 
        </div>
    );
};

export default ErrorPage;