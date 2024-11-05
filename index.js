const tabLinks = document.getElementsByClassName('apropos_tab_links');
const tabContents = document.getElementsByClassName('apropos_tab_content');

const openTab = (tabName) => {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active_link");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active_tab");
    }

    event.currentTarget.classList.add("active_link")
    document.getElementById(tabName).classList.add("active_tab")
}