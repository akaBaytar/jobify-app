export const checkDefaultTheme = () => {
  const darkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', darkTheme);

  return darkTheme;
};
