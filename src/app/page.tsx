"use client"

import { useState, useRef } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = (direction: 'left' | 'right') => ({
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  })

  const Feature = ({ title, description, direction }: { title: string; description: string; direction: 'left' | 'right' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
      <motion.section
        ref={ref}
        className={`min-h-screen flex items-center justify-center p-6`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={featureVariants(direction)}
      >
        <div className={`bg-gray-800 p-8 rounded-lg max-w-2xl w-full ${direction === 'left' ? 'mr-auto' : 'ml-auto'}`}>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-xl">{description}</p>
        </div>
      </motion.section>
    )
  }

  return (
    <div className="bg-purple-900 text-white">
      <header className="p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <motion.div
          className="flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xl font-bold">FundChain</span>
        </motion.div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <AnimatePresence>
                {["About", "Features", "Pricing", "Contact"].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-lg"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </AnimatePresence>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main>
        <motion.section
          className="min-h-screen flex flex-col justify-center items-center text-center p-6"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Decentralizing public goods with transparency and trust</h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">FundChain</h2>
          <p className="text-xl mb-8 max-w-2xl">Join now and be part of the change—sign up today!</p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-lg py-6 px-8">Sign Up</Button>
        </motion.section>

        <Feature
          title="Transparent Funding"
          description="Track every donation and see how funds are used in real-time, ensuring complete transparency in the funding process. Our blockchain-based system provides an immutable record of all transactions, allowing donors to follow their contributions from start to finish."
          direction="left"
        />
        <Feature
          title="Decentralized Governance"
          description="Participate in decision-making through our decentralized voting system, giving power back to the community. Stakeholders can propose and vote on initiatives, ensuring that the direction of projects aligns with the collective will of the community."
          direction="right"
        />
        <Feature
          title="Smart Contract Integration"
          description="Utilize blockchain technology and smart contracts for secure, automated, and efficient fund management. Smart contracts ensure that funds are only released when predefined conditions are met, adding an extra layer of security and trust to the funding process."
          direction="left"
        />
      </main>
      <motion.footer
        className="bg-gray-800 p-6 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h4 className="font-bold mb-4 text-lg">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Our Mission</a></li>
              <li><a href="#" className="hover:text-pink-400">Team</a></li>
              <li><a href="#" className="hover:text-pink-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-400">API</a></li>
              <li><a href="#" className="hover:text-pink-400">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pink-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}