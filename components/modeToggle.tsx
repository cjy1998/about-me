"use client";
// import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; // 添加这行
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import { useIsSSR } from "@react-aria/ssr";
const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // 添加状态
  const isSSR = useIsSSR();
  useEffect(() => {
    setMounted(true);
    console.log("Current theme:", theme);
  }, [theme]);

  if (!mounted) {
    return null; // 在客户端加载完成前不渲染任何内容
  }

  return (
    <div
      className="cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        console.log("Switching to:", newTheme);
        setTheme(newTheme);
      }}
    >
      {theme === "dark" || isSSR ? (
        <SunFilledIcon size={22} />
      ) : (
        <MoonFilledIcon size={22} />
      )}
    </div>
  );
};

export default ModeToggle;
