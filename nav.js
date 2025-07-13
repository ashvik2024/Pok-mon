const menuItems = [
  { name: "Home", link: "/index.html" },
  { name: "Pokédex", link: "/pages/pokedex.html" },
  { name: "About", link: "/pages/about.html" },
  { name: "Contact", link: "/pages/contact.html" },
];

// Step 1: Fetch and inject navbar
fetch("/pages/nav.html")
  .then((res) => res.text()) // ✅ use res.text()
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Step 2: Now that navbar is loaded, get elements
    const navLinks = document.getElementById("navLinks");
    const ham = document.getElementById("ham");

    // Step 3: Generate nav links
    menuItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.link;
      a.textContent = item.name;

      li.appendChild(a);
      navLinks.appendChild(li);
    });

    // Step 4: Hamburger toggle
    ham.addEventListener("click", () => {
      navLinks.classList.toggle("show-nav");
    });
  });




// At the end of nav.js
fetch("/pages/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });





