// JavaScript to toggle accordion content

//  Getting all the accordion items
const accordionItems = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function () {
    let accordionContent = this.getElementsByClassName("accordion-content")[0];

    let activeAccordionItem = document.querySelector(".accordion-item.active");

    // Close previously active accordion item
    if (activeAccordionItem && activeAccordionItem !== this) {
      activeAccordionItem.classList.remove("active");
      activeAccordionItem.getElementsByClassName(
        "accordion-content"
      )[0].style.display = "none";
    }

    this.classList.toggle("active");

    // Toggling the accordion contents
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });

}
