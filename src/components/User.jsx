function User() {
  function storeData() {
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const cover = document.querySelector(".cover");

    if (firstName.value && lastName.value && email.value) {
      document.querySelector(".message").textContent = "Thank you!";
      localStorage.setItem(
        "User",
        JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        })
      );
      setTimeout(() => {
        cover.style.transform = "translateX(-250%)";
        window.location.reload();
      }, 1000);
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <div className="cover">
      <h2 className="message">Let's get to know you!</h2>
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
        <button className="submit_info" onClick={storeData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default User;
