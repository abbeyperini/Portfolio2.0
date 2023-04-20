function setTheme(themeName, setClassName) {
    localStorage.setItem('theme', themeName);
    setClassName(themeName);
}

function themeIsInStorage(theme) {
  return theme === 'theme-dark' || theme === 'theme-light';
}

function keepTheme(setClassName) {
  const theme = localStorage.getItem('theme');
  if (themeIsInStorage(theme)) {
    setTheme(theme, setClassName);
    return;
  }

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light', setClassName);
    return;
  }

  setTheme('theme-dark', setClassName);
}

module.exports = {
  setTheme,
  keepTheme
}

