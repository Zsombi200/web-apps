const tabs = document.getElementsByClassName("tabs");

Array.from(tabs).forEach((tab) => {
  tab.addEventListener("click", () => {
    Array.from(document.querySelectorAll("#contents > div")).forEach(
      (content) => {
        content.classList.remove("show");
        content.classList.add("hide");
      }
    );

    const text = document.getElementById(tab.id.replace("s", "content"));
    text.classList.add("show");
  });
});
