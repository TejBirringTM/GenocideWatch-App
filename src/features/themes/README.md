# Theme

Theme, in this case, refers to the string variable that tells [DaisyUI](https://daisyui.com/) which installed/custom-defined themes to use.

The theme is stored in memory.

Theme is updated using: `applyTheme(theme: ThemeOption | undefined | null)`.
If no `theme` argument is provided, it will apply the default theme.
