export default function SocialList({ children, shade = "light" }) {
  return (
    <li
      className={`${
        shade === "light" ? "hover:text-slate-200" : "hover:text-slate-900"
      } ${
        shade === "dark" && "text-slate-700 text-2xl"
      } transition-all hover:scale-110`}
    >
      {children}
    </li>
  )
}
