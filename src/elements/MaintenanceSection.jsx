import { IoMdWarning } from 'react-icons/io'

export const MaintenanceSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="assets/under-construction.png"
        alt="under-construction"
        className="w-[500px]"
      />
      <h1 className="text-justify text-[14px] font-semibold text-white mt-10 leading-loose bg-orange-500 py-1 px-4 rounded-lg flex items-center gap-x-3 || xl:text-lg">
        <span>{<IoMdWarning />}</span>Section Under Construction<span>{<IoMdWarning />}</span>
      </h1>
    </div>
  )
}
