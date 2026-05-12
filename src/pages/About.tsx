import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-amber-600"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">Our Philosophy</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-[0.9]"
          >
            The Art of <br/>Slowing Down.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            At Mayorga Handcrafted, we believe that an object's value is found in the time it took to create it and the years it will spend by your side.
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-[#111111] border border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" 
                alt="Cutting Leather" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h3 className="text-xl font-serif text-white">Ethically Sourced</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              We exclusively use full-grain, vegetable-tanned leather from certified tanneries. This process takes longer but ensures a durable leather that ages beautifully without the use of harsh chemicals.
            </p>
          </div>

          <div className="space-y-6 md:translate-y-12">
            <div className="aspect-[3/4] bg-[#111111] border border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&q=80&w=800" 
                alt="Saddle Stitching" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h3 className="text-xl font-serif text-white">The Saddle Stitch</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Every seam is stitched by hand using the traditional saddle stitch. Unlike a machine-sewn lockstitch, a saddle stitch uses two needles and a single thread, creating a bond that will never unravel.
            </p>
          </div>

          <div className="space-y-6">
            <div className="aspect-[3/4] bg-[#111111] border border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1627384113700-14e38e104e6c?auto=format&fit=crop&q=80&w=800" 
                alt="Finishing" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h3 className="text-xl font-serif text-white">Burnished Edges</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              The edges of every piece are meticulously burnished with natural beeswax and friction. This laborious process seals the leather fibers, creating a smooth, durable edge that lasts for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 bg-[#111111] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-white/80 leading-relaxed">
            "Your Mayorga piece is not finished when it leaves our studio. It is only finished after a decade of riding in your pocket, absorbing the oils from your hands, and telling the unique story of your life."
          </p>
          <div className="mt-12 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-2">Daniel Mayorga</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Founder & Maker</span>
          </div>
        </div>
      </section>
    </div>
  );
}
