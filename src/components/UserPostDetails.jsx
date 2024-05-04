import React from 'react'

function UserPostDetails({ title, service, description, _id, price }) {
    return (
        <div>
        <UserPostDetails
        _id={_id}
        title={title}
        description={description}
        price= {price}
        />
      </div>
    );
  }


export default UserPostDetails
