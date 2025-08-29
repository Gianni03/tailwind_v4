const LinearGradient = () => {
  return (
    <>
    <div className="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500">Soy Un Gradiente</div>
    <div className="bg-linear-to-r /srgb from-indigo-500 to-teal-400">Otro Gradiente</div>
    <div className="bg-linear-to-r /oklch from-indigo-500 to-teal-400">Otro Gradiente</div>
    <div className="bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600 size-24 rounded-full"></div>
    <div className="bg-radial/[at_25%_25%] from-white to-black
     size-24 rounded-full"></div>
    </>
  )
}

export default LinearGradient