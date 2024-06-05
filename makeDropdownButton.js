export default function makeDropdownButton(parent, config) {
  // test object, use config argument in production environment
  const config2 = {
    button: {
      text: "Button Text",
    },
    links: [
      {
        linkText: "One",
        url: "#",
      },
      {
        linkText: "Two",
        url: "#",
      },
      {
        linkText: "Three",
        url: "#",
      },
    ],
  };

  // create container div
  const dropdownDiv = document.createElement("div");
  parent.appendChild(dropdownDiv);

  // create button
  const dropdownBtn = document.createElement("button");
  dropdownBtn.classList.add("dropdown-btn");
  dropdownBtn.textContent = config2.button.text;

  // btn event listener
  dropdownBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("active");
  });
  dropdownDiv.appendChild(dropdownBtn);

  // create dropdown div
  const dropdownContentDiv = document.createElement("div");
  dropdownContentDiv.classList.add("dropdown-content");
  dropdownDiv.appendChild(dropdownContentDiv);

  // create dropdown links
  config2.links.forEach((link) => {
    let newLink = document.createElement("a");
    newLink.classList.add("dropdown-link");
    newLink.setAttribute("href", link.url);
    newLink.textContent = link.linkText;

    // link event listener
    newLink.addEventListener("click", (e) => {
      if (newLink.parentElement.classList.contains("active")) {
        // link functionality, might be redundant if has active 'href' attribute
        console.log(newLink.textContent);
      }
    });
    dropdownContentDiv.appendChild(newLink);
  });

  // document event listener
  document.addEventListener("click", (e) => {
    const isDropdownBtn = e.target.matches(".dropdown-btn");
    if (
      (!isDropdownBtn && e.target.closest(".dropdown-div") != null) ||
      e.target.closest(".dropdown-content") != null
    ) {
      return;
    }

    let currentDropdown;
    if (isDropdownBtn) {
      currentDropdown = e.target.closest(".dropdown-btn");
    }

    document.querySelectorAll(".dropdown-btn.active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
      dropdown.nextElementSibling.classList.remove("active");
    });
  });
}

// <div class="dropdown-div">
//   <button class="dropdown-btn">Test</button>
//   <div class="dropdown-content">
//     <a href="#" class="dropdown-link">
//       One
//     </a>
//     <a href="#" class="dropdown-link">
//       Two
//     </a>
//     <a href="#" class="dropdown-link">
//       Three
//     </a>
//   </div>
// </div>;
