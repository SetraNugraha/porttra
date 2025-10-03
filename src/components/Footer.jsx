import { SocialMediaLink } from "../elements/SocialMediaLink"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-5 mt-10 h-[150px] bg-stone-200 flex flex-col justify-center items-center gap-5">
      <SocialMediaLink />
      <p className="text-secondary text-[14px] font-semibold flex flex-col justify-center items-center">
        &copy; {year} - Made By Setra <span>Vite - React JS - Tailwind CSS - Email JS</span>
      </p>
      <a
        href="https://youtu.be/kjdT_M2F9tc?si=PGh9mQLqP6jPYQBe"
        target="_blank"
        className="text-secondary text-[14px] font-semibold flex flex-col justify-center items-center underline hover:text-blue-500">
        Source Design
      </a>
    </footer>
  )
}
