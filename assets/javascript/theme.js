// const themeLnkEl = document.querySelector('.link-color');
// const themeLnkEl2 = document.querySelector('.done-by--link');
// const header = document.querySelector('.header')
// const navItems = document.getElementsByClassName('nav-item');

const darkTheme = (btnEl) => {
  localStorage.setItem('currentTheme', JSON.stringify('DARK'));
  // adds dark-mode class to body tag
  document.body.classList.add('dark-mode');
  // sets checkbox to checked if dark-mode is enabled
  themeSwitch.checked = true;

  // document.body.style.color = "silver";
  // document.body.style.background = "var(--clr-maroon-overload-will-s-205)";
  // themeLnkEl.style.color="var(--clr-terracotta)";
  // themeLnkEl2.style.color="var(--clr-terracotta)";
  
  // header theme switch
  // header.style.background = "var(--clr-maroon-overload-opacity-70)";
  // header.style.boxShadow = "0 0 5px var(--clr-blinding-light)";
  
  // nav bar theme switch
  // for (let item of navItems) {
  //     item.style.color = "silver"
  // }
}

const lightTheme = (btnEl) => {
  localStorage.setItem('currentTheme', JSON.stringify('LIGHT'));
  // removes dark-mode class from body tag
  document.body.classList.remove('dark-mode');
  // removes checked from checkbox if dark-mode is not enabled
  themeSwitch.checked = false;
  // document.body.style.color = "var(--clr-paragraph)";
  // document.body.style.background = "var(--clr-background-tint)";
  // themeLnkEl.style.color="var(--clr-paragraph)";
  // themeLnkEl2.style.color="var(--clr-paragraph)";
  
  // header theme switch
  // header.style.background = "var(--clr-blueberry-pastel-tint-opacity-70)";
  // header.style.boxShadow = "0 0 5px var(--clr-shadow)";

  // nav bar theme switch
  // for (let item of navItems) {
  //     item.style.color = "var(--clr-paragraph)"
  // }
}

function themeBtnHandler(btnEl) {
  // If no theme in localStorage, use timeOfDay() to decide theme
  const currentTheme = JSON.parse(localStorage.getItem('currentTheme')) || timeOfDay();
  const nextTheme = 'LIGHT' === currentTheme ? 'DARK' : 'LIGHT';

  // toggle theme of the webpage
  nextTheme === "DARK"
    ? darkTheme(btnEl)
    : lightTheme(btnEl)
}

const timeOfDay = (btnEl) => {
  const date = new Date();
  const hours = date.getHours();

  hours > 17
    ? darkTheme(btnEl)
    : lightTheme(btnEl)
}

export { lightTheme, darkTheme, themeBtnHandler, timeOfDay }
