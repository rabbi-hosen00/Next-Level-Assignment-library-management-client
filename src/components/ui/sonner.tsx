// import { useTheme } from "next-themes"
// import { Toaster as Sonner, } from "sonner"

// const Toaster = ({ ...props }) => {
//   const { theme = "system" } = useTheme()

//   return (
//     <Sonner
//       theme={theme }
//       className="toaster group"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)",
//         } as React.CSSProperties
//       }
//       {...props}
//     />
//   )
// }

// export { Toaster }




import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = (props: ToasterProps) => {
  const { theme } = useTheme();

  // ✅ Validate theme (fallback = "system")
  const validTheme: "light" | "dark" | "system" =
    theme === "light" || theme === "dark" ? theme : "system";

  return (
    <Sonner
      theme={validTheme} // ✅ Type-safe
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
