import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .post("http://localhost:8080/sendMail", formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <section id="contact">
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-lg-6 flex-column d-flex justify-content-center align-items-center">
            <h1>Let's Connect Now</h1>
            <motion.div
              layout
              transition={{ layout: { duration: 0.4 } }}
              className="contact-box"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                borderRadius: "25px",
              }}
              onClick={() => setOpen(!open)}
            >
              <motion.h6 className="initial-box text-center mb-2">
                Open for My Contact Details
              </motion.h6>
              {open && (
                <motion.div
                  className="actual-content"
                  style={{ height: "200px", width: "350px" }}
                >
                  <div className="text-center">
                    <h3 className="">Hello Namasthe !!</h3>

                    <p>My Name :: Srinivasa Reddy</p>
                    <p>My Mail :: elakotisrinu48@gmail.com</p>
                    <p>My Number :: +91 9014781995</p>
                    <p>
                      Feel free to reach out to me if you want to design your
                      websites with cool animations
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
          <form className="col-lg-6" onSubmit={handleSubmit}>
            <div className="form-container p-3">
              <h4 className="connect text-start">Connect Now</h4>
              <div className="main-form p-3">
                <label for="name" className="">
                  Name
                </label>
                <br />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mb-3 input"
                  name="name"
                  onChange={handleChange}
                />
                <br />
                <label for="email" className="">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  className="mb-3 input"
                  name="email"
                  onChange={handleChange}
                />
                <br />

                <label>Description</label>
                <br />
                <textarea
                  name="message"
                  onChange={handleChange}
                  className="description"
                  rows={5}
                  cols={40}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginLeft: "15px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// export async function createPostAction(data) {
//   const formData = await data.request.formData();
//   // const postData = Object.fromEntries(formData);
//   console.log("this is form data " , formData);

//   // fetch("https://localhost:8080/sendMail", {
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify(postData),
//   // })
//   //   .then((res) => res.json())
//   //   .then((post) => {
//   //     console.log(post);
//   //   });

//   // return redirect("/");
// }

export default Form;
