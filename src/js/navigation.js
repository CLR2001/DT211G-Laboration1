"use strict";
/* -------------------------------------------------------------------------- */
/*                  Responsive navigation with hamburger menu                 */
/* -------------------------------------------------------------------------- */
/* ------------------- 1. Handles navigation functionality ------------------ */
/* ------------------- 2. Updates scrollbarWidth variable ------------------- */

export function initNavigation() {
  // 1. Selects DOM elements
  const nav = document.querySelector('header nav');
  const hamburgerButton = document.querySelector('.hamburger-button');
  const navigationLinks = document.querySelectorAll('.nav-list a');

  // 2. Checks if elements exist to avoid crashes
  if (!nav || !hamburgerButton) return;

  // 3. Function to update scrollbar width dynamically
  function updateScrollbarWidth(){
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }

  // 3. Runs on load
  updateScrollbarWidth();

  // 4. Repeated functions
  function closeMenu(nav) {
    nav.dataset.open = "false";
    toggleInert(false);
  }

  function toggleInert(value) {
    const elements = document.querySelectorAll('body > :not(header)');
    elements.forEach(element => {
      element.inert = value;
    })
  }

  // 5. Closes menu when resizing window
  window.addEventListener('resize', () =>{
    updateScrollbarWidth();
    if (window.innerWidth > 991 && nav.dataset.open === "true"){
      closeMenu(nav);
    }
  });

  // 6. Hamburger button functionality
  hamburgerButton.addEventListener('click', () => {
    const isOpen = nav.dataset.open !== "true";
    nav.dataset.open = isOpen;
    toggleInert(isOpen);
  });

  // 7. Closes menu when clicking on link
  navigationLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu(nav));
  });
}




