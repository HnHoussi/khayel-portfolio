const tabLinks = document.getElementsByClassName("apropos_tab_links");
const tabContents = document.getElementsByClassName("apropos_tab_content");

const openTab = (tabName, clickedTab) => {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active_link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active_tab");
  }

  clickedTab.classList.add("active_link");
  document.getElementById(tabName).classList.add("active_tab");
};

for (let tabLink of tabLinks) {
  tabLink.addEventListener("click", function () {
    openTab(this.getAttribute("data-tab"), this);
  });
}

function scrollToSection() {
  document.getElementById("contact_section").scrollIntoView();
}

document
  .getElementById("download-CV-btn")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "res/CV_Khayel_CHAABANI.pdf"; // Replace with the path to your CV
    link.click();
  });
