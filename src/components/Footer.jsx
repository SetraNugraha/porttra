import { SocialMediaLink } from '../elements/SocialMediaLink'

export default function Footer() {
  return (
    <footer className="px-5 mt-10 h-[150px] bg-stone-200 flex flex-col justify-center items-center gap-5">
      <SocialMediaLink />
      <p className="text-secondary text-[14px] font-semibold flex flex-col justify-center items-center">
        &copy; 2024 - Made By Setra <span>Vite - React JS - Tailwind CSS - Email JS</span>
      </p>
    </footer>
  )
}
