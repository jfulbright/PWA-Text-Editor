const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  console.log("👍", "beforeinstallprompt fired -> ", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener("click", async () => {
  console.log("click fired -> ", window.deferredPrompt);
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    console.log("promptEvent is undefined -> ", promptEvent);
    return;
  }

  // Show the install prompt.
  console.log("promptEvent value -> ", promptEvent);

  // prompt() can only be called once.
  promptEvent.prompt();

  window.deferredPrompt = null;
  // Hide the install button.
  butInstall.classList.toggle("hidden", true);

  // butInstall.addEventListener("click", async () => {
  //   console.log("👍", "butInstall-clicked test");
  //   const promptEvent = window.deferredPrompt;
  //   if (!promptEvent) {
  //     console.log("No promptEvent");
  //     return;
  //   }
  //   // Show the install prompt.
  //   promptEvent.prompt();

  //   // Reset the deferred prompt variable, since
  //   // prompt() can only be called once.
  //   window.deferredPrompt = null;
  //   // Hide the install button.
  //   butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
