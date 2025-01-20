import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Featured from "./components/Featured";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Srinivasa Reddy - Frontend Developer Portfolio</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Hi, I'm Srinivasa Reddy, a passionate and skilled Frontend Developer with a knack for creating visually stunning, user-friendly, and performance-driven websites and web applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I bring designs to life and ensure flawless functionality."
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/appleicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/normalicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/normalicon.png"
        />

        <link
          rel="canonical"
          href="https://srinivas-dev995.github.io/srinu-portfolio/"
        />

        <meta
          property="og:title"
          content="Srinivasa Reddy - Frontend Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Hi, I'm Srinivasa Reddy, a passionate and skilled Frontend Developer with expertise in HTML, CSS, JavaScript, React, and Vue.js. Explore my portfolio and let's collaborate!"
        />
        <meta
          property="og:url"
          content="https://srinivas-dev995.github.io/srinu-portfolio/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.yourdomain.com/path-to-og-image.jpg"
        />
      </Helmet>

      <Header />
      <Home />
      <About />
      <Featured />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
