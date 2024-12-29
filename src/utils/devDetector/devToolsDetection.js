export const detectDevTools = (logoutUser, allow = 100) => {
    // Disable right-click context menu
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  
    // Disable keyboard shortcuts for opening DevTools
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) || // Ctrl+Shift+I/J/C
        (event.ctrlKey && event.key === "U") || // Ctrl+U
        event.key === "F12" // F12
      ) {
        event.preventDefault();
        alert("DEVTOOLS detected. All operations will be terminated.");
        logoutUser(); // Call logout user function
        window.close(); // Attempt to close the window
      }
    });
  
    function detectDevTool() {
      const start = +new Date();
  
      // Conditionally invoke debugger
      if (process.env.NODE_ENV === "development") {
        debugger; // Triggers a breakpoint for DevTools
      }
  
      const end = +new Date();
  
      // Check if the time taken is greater than the allowed limit
      if (end - start > allow) {
        alert("DEVTOOLS detected. All operations will be terminated.");
        logoutUser(); // Call logout user function
        window.close(); // Attempt to close the window
      }
    }
  
    // Attach event listeners for various user actions
    const events = ["load", "resize", "mousemove", "focus", "blur"];
  
    events.forEach((event) => {
      if (window.attachEvent) {
        window.attachEvent(`on${event}`, detectDevTool);
      } else {
        window.addEventListener(event, detectDevTool);
      }
    });
  
    // Initial check on page load
    detectDevTool();
  };
  