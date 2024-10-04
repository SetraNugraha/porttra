/* eslint-disable react/prop-types */
export const Header = ({ title, subTitle, position }) => {
  return (
    <div className={`flex flex-col items-${position} || xl:w-[55%] xl:mx-auto`}>
      <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3 || xl:text-lg xl:font-semibold xl:before:h-[2px] ">
        {title}
      </h3>
      <h1 className="font-bold text-lg text-gray-600 || xl:text-3xl ">{subTitle}</h1>
    </div>
  )
}
