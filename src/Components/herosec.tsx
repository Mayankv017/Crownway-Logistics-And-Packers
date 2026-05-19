const HeroSec = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-b to-[#20325d] from-[#c06161] via-[#969798]">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
          Crownway Logistics
        </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Fast, secure, and reliable global logistics solutions for businesses worldwide.
        </p>

        <button className="bg-yellow hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default HeroSec
