setTimeout(() => {
  let timerInstance;
  let toastInstance;

  function onClickHandler(btnText) {
    toastInstance = document.getElementById("toast");
    const messageBox = document.getElementById("toast-message");
    messageBox.innerHTML = btnText + " button clicked successfully!";
    showToast();
  }

  function showToast() {
    clearTimeout(timerInstance);
    toastInstance.style.transform = "translateX(0px)";
    timerInstance = setTimeout(() => {
      toastInstance.style.transform = "translateX(400px)";
    }, 4000);
  }

  function closeToast() {
    toastInstance.style.transform = "translateX(500px)";
  }

  // Inject button list display html code in page
  const mainElement = document.getElementsByClassName("app_container");

  const container = document.createElement("div");
  container.id = "digital-brain-chrome-extension-1-0-0-main-box";

  const parent = document.createElement("div");
  parent.id = "digital-brain-chrome-extension-1-0-0-content-box";
  parent.classList.add("digital-brain-chrome-extension-1-0-0-dynamic-item-box");

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
    btn.onclick = () => onClickHandler(btnText);
    parent.appendChild(btn);
  });

  container.appendChild(parent);

  mainElement[0].parentElement.prepend(container);

  // Inject toast html code in page
  const wrapper = document.createElement("div");
  wrapper.id = "digital-brain-chrome-extension-1-0-0-toast";
  wrapper.classList.add("wrapper");

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.id = "toast";

  const toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");

  const toastNotificationHeader = document.createElement("p");
  toastNotificationHeader.innerHTML = "Success";

  const toastMessageBody = document.createElement("p");
  toastMessageBody.id = "toast-message";

  toastBody.appendChild(toastNotificationHeader);
  toastBody.appendChild(toastMessageBody);

  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.id = "close";
  closeBtn.onclick = closeToast;

  toast.appendChild(toastBody);
  toast.appendChild(closeBtn);

  wrapper.appendChild(toast);

  mainElement[0].parentElement.appendChild(wrapper);
}, 2500);
