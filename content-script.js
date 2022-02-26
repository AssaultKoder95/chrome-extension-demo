setTimeout(() => {
  function testAlert() {
    alert("Calling Alert!");
  }

  const mainElement = document.getElementsByClassName("app_container");

  const containerDiv = document.createElement("div");
  containerDiv.id = "digital-brain-chrome-extension-1-0-0-main-box";

  const parentDiv = document.createElement("div");
  parentDiv.id = "digital-brain-chrome-extension-1-0-0-content-box";
  parentDiv.classList.add(
    "digital-brain-chrome-extension-1-0-0-dynamic-item-box"
  );

  const btnList = [
    "Refund Stripe Transaction",
    "Change shipping address",
    "Refund Shopify",
  ];

  btnList.forEach((btnText) => {
    let btn = document.createElement("button");
    btn.innerHTML = btnText;
    btn.classList.add("digital-brain-chrome-extension-1-0-0-btn");
    btn.name = "notificationBtn";
    btn.onclick = testAlert;
    parentDiv.appendChild(btn);
  });

  containerDiv.appendChild(parentDiv);

  mainElement[0].parentElement.prepend(containerDiv);
}, 3000);
