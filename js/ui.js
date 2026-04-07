function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    document.getElementById("theme-btn").textContent = isDark ? "☀️" : "🌙";
}

window.onload = () => {
    const theme = localStorage.getItem("theme");
    const btn = document.getElementById("theme-btn");

    if (theme === "dark") {
        document.body.classList.add("dark");
        if (btn) btn.textContent = "☀️";
    }
};