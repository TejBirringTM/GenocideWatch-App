import { ref } from "vue";
import { defaultTheme, type ThemeOption } from "../data/themes";

const activeTheme = ref(defaultTheme);

function _applyTheme(theme: ThemeOption) {
    const html = document.getElementsByTagName("html").item(0);
    if (!html) {
        console.error("Failed to find 'html' tag.");
    } else {
        html.setAttribute("data-theme", theme);
    }
}

export function applyTheme(theme?: ThemeOption | undefined | null) {
    if (!theme) {
        activeTheme.value = defaultTheme;
    } else {
        activeTheme.value = theme;
    }
    _applyTheme(activeTheme.value);
}
