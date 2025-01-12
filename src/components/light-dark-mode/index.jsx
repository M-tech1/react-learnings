import useLocalStorage from "./useLocalStorage";
import "./themeStyle.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <div className=" flex flex-col items-center justify-center">
          <p>Light and Dark Themes</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
}
