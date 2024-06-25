import React from 'react'

function ProfilePicture({ src, alt }) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="rounded-circle overflow-hidden" style={{ width: '250px', height: '250px' }}>
          <img src={src} alt={alt} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    );
  }
  
export default ProfilePicture;