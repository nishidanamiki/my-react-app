import { useLocalStorage } from "../hooks/useLocalStorage";

function ThemeSwitcher() {
  // useStateと同じように使える！
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
