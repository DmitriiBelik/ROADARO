import { PaletteOptions, createTheme, css } from '@mui/material/styles'

export type AllowedTheme = NonNullable<PaletteOptions['mode']>

export const DEFAULT_THEME: AllowedTheme = 'dark'

export const lightTheme = createTheme({
    palette: {
        primary: { main: '#9147FF' },
        secondary: { main: '#2a48f3' },
        mode: 'light',
    },
})

export const darkTheme = createTheme({
    palette: {
        primary: { main: '#334155' },
        secondary: { main: '#1E293B' },
        mode: 'dark',
    },
})

export const globalStyles = css`
    :root {
        body {
            background-color: #fff;
            color: #121212;
        }
    }

    [data-theme='dark'] {
        body {
            background-color: #0f172a;
            color: #fff;
        }
    }
`
