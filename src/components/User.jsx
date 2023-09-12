function User() {
  return (
    <div className="cover">
      <div className="info_container">
        <div className="first_name">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="firstName" />
        </div>
        <div className="last_name">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="lastName" />
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />
        </div>
        <button className="submit_info">Submit</button>
      </div>
    </div>
  );
}

export default User;
