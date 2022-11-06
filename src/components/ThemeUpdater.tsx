import { FC } from "react";
import { Button, css } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// eslint-disable-next-line @typescript-eslint/ban-types
const ThemeUpdater: FC<{}> = () => {
  const {resolvedTheme, setTheme } = useTheme();

  return (
    <div
      css={css`
        display: grid;
        grid-gap: 8px;
      `}
    >
      <Button
        style={{width:'200px', borderRadius:'100px', margin:'0 auto', position:'absolute', bottom:'30px'}}
        variant="contained"
        endIcon={
          resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
        }
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? "dark" : "light"} mode
      </Button>
    </div>
  );
};

export default ThemeUpdater;
