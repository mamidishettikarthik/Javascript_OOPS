import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="container">
        <form action="action_page.php" />
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <input type="submit" value="Submit" />
      </div>

    </div>
  )
}

export default Contact