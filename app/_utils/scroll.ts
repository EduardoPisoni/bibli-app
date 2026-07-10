export function scrollToSection(section: string) {
  const htmlSection = document.getElementById(section);
  if (htmlSection) {
    const offsetTop = htmlSection.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}