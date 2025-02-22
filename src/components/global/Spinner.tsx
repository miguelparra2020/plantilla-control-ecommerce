interface IPropsSpinner {
    color?: string
}
export const Spinner = ({ color = "gray" }: IPropsSpinner) => {
    const styleSpinner1 = "inline w-8 h-8 text-gray-200 animate-spin  fill-gray-600"
    const styleSpinner2 = "inline w-8 h-8 text-gray-200 animate-spin  fill-red-600"
    const styleSpinner3 = "inline w-8 h-8 text-gray-200 animate-spin  fill-blue-600"
    const styleSpinner4 = "inline w-8 h-8 text-gray-200 animate-spin  fill-yellow-600"
    const styleSpinner5 = "inline w-8 h-8 text-gray-200 animate-spin  fill-green-600"
    const styleSpinner6 = "inline w-8 h-8 text-gray-200 animate-spin  fill-purple-600"
    const styleSpinner7 = "inline w-8 h-8 text-gray-200 animate-spin  fill-pink-600"
    const styleSpinner8 = "inline w-8 h-8 text-gray-200 animate-spin  fill-indigo-600"
    const styleSpinner9 = "inline w-8 h-8 text-gray-200 animate-spin  fill-teal-600"
    const styleSpinner10 = "inline w-8 h-8 text-gray-200 animate-spin  fill-cyan-600"
    const styleSpinner11 = "inline w-8 h-8 text-gray-200 animate-spin  fill-orange-600"
    const styleSpinner12 = "inline w-8 h-8 text-gray-200 animate-spin  fill-lime-600"
    const styleSpinner13 = "inline w-8 h-8 text-gray-200 animate-spin  fill-emerald-600"
    const styleSpinner14 = "inline w-8 h-8 text-gray-200 animate-spin  fill-sky-600"
    const styleSpinner15 = "inline w-8 h-8 text-gray-200 animate-spin  fill-violet-600"
    const styleSpinner16 = "inline w-8 h-8 text-gray-200 animate-spin  fill-rose-600"
    const styleSpinner17 = "inline w-8 h-8 text-gray-200 animate-spin  fill-cyan-600"
    const styleSpinner18 = "inline w-8 h-8 text-gray-200 animate-spin  fill-amber-600"
    const styleSpinner19 = "inline w-8 h-8 text-gray-200 animate-spin  fill-fuchsia-600"
    const styleSpinner20 = "inline w-8 h-8 text-gray-200 animate-spin  fill-amber-600"
    const styleSpinner = color === "gray" ? styleSpinner1 : color === "red" ? styleSpinner2 : color === "blue" ? styleSpinner3 : color === "yellow" ? styleSpinner4 : color === "green" ? styleSpinner5 : color === "purple" ? styleSpinner6 : color === "pink" ? styleSpinner7 : color === "indigo" ? styleSpinner8 : color === "teal" ? styleSpinner9 : color === "cyan" ? styleSpinner10 : color === "orange" ? styleSpinner11 : color === "lime" ? styleSpinner12 : color === "emerald" ? styleSpinner13 : color === "sky" ? styleSpinner14 : color === "violet" ? styleSpinner15 : color === "rose" ? styleSpinner16 : color === "cyan" ? styleSpinner17 : color === "amber" ? styleSpinner18 : color === "fuchsia" ? styleSpinner19 : color === "amber" ? styleSpinner20 : styleSpinner1

    return (
        <div role="status">
    <svg aria-hidden="true" className={styleSpinner} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
    )

}