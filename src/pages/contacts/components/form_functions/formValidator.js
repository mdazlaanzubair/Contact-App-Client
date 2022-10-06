const formValidator = (formData) => {
  // error holder
  let errors = {};

  if (formData.hasOwnProperty("fname")) {
    if (formData.fname === "" || formData.fname === " " || !formData.fname) {
      errors.fname = "Contact must have a first name.";
    }
    if (formData.fname.trim().length <= 3) {
      errors.fname = "Name must be 3 characters long.";
    }
    if (formData.fname.trim().length > 30) {
      errors.fname = "Name must not be longer than 30 characters.";
    }
  } else {
    errors.fname = "Contact must have a first name.";
  }

  if (formData.hasOwnProperty("contact")) {
    if (formData.contact === "" || formData.contact === " " || !formData.contact) {
      errors.contact = "Contact number is required.";
    }
    if (formData.contact.trim().length <= 2) {
      errors.contact = "Contact number must be 2 characters long.";
    }
  } else {
    errors.contact = "Contact number is required.";
  }

  if (formData.hasOwnProperty("lname")) {
    if (formData.lname.trim().length <= 3) {
      errors.lname = "Name must be 3 characters long.";
    }
    if (formData.lname.trim().length > 30) {
      errors.lname = "Name must not be longer than 30 characters.";
    }
  }

  if (formData.hasOwnProperty("email")) {
    const email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.match(email_reg) || formData.email.match(email_reg) === null) {
      errors.email = "Invalid email.";
    }
  }

  if (formData.hasOwnProperty("gender")) {
    const gender = ["Private", "Male", "Female"];
    if (!gender.includes(formData.gender)) {
      errors.gender = "Invalid gender.";
    }
  }

  if (formData.hasOwnProperty("relation")) {
    const relation = ["Friend", "Family", "Neighbor", "Colleague", "Stranger"];
    if (!relation.includes(formData.relation)) {
      errors.relation = "Invalid relation.";
    }
  }

  if (formData.hasOwnProperty("about")) {
    if (formData.about.trim().length <= 20) {
      errors.about = "About must be a bit longer.";
    }
    if (formData.about.trim().length >= 1200) {
      errors.about = "About is too long.";
    }
  }

  return errors;
};

export default formValidator;
