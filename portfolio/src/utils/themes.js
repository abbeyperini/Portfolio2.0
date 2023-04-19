function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    if (theme === 'theme-dark') {
      setTheme('theme-dark');
    } 
    
    if (theme === 'theme-light') {
      setTheme('theme-light')
    }
    return
  }

  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkTheme.matches) {
    setTheme('theme-dark')
    return
  } 

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light')
    return
  }

  setTheme('theme-dark')
}

module.exports = {
  setTheme,
  keepTheme
}

