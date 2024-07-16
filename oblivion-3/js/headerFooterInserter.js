const header = document.querySelector("header");
const footer = document.querySelector("footer");

// Header dom inserter
const htmlString = `
    <a id="logo_link" href="../index.html">
      <img
        class="logo"
        src="../images/Oblivion_logo.png"
        alt="oblivion Logo"
      />
    </a>
    <button id="menu"></button>
    <nav>
      <a href="../index.html">Home</a>
      <a href="contact-me.html">Contact Us</a>
    </nav>
  `;

  // Footer dom inserter
  const htmlString2 = `
  <p id="copyright">Oblivion &copy; 2022 - Hyrum Bullock</p>`;



  header.innerHTML = htmlString;
  footer.innerHTML = htmlString2;