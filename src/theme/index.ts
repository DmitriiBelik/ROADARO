import { PaletteOptions, createTheme, css } from '@mui/material/styles'

export type AllowedTheme = NonNullable<PaletteOptions['mode']>

export const DEFAULT_THEME: AllowedTheme = 'dark'

export const lightTheme = createTheme({
    palette: {
        primary: { main: '#B5B5B5' },
        secondary: { main: '#DCDCDC' },
        info: { main: '#FBBF24' },
        mode: 'light',
    },
})

export const darkTheme = createTheme({
    palette: {
        primary: { main: '#334155' },
        secondary: { main: '#1E293B' },
        info: { main: '#FBBF24' },
        mode: 'dark',
    },
})

export const globalStyles = css`
    :root {
        body {
            background-color: #fff;
            color: black;
        }
    }

    [data-theme='dark'] {
        body {
            background-color: #0f172a;
            color: #fff;
        }
    }
`
