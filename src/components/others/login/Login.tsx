"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, ArrowRight, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedText } from "@/components/ui/animated-text"
import { MotionCard } from "@/components/ui/motion-card"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl">
        {/* Left side - Branding */}
        <motion.div
          className="w-full md:w-1/2 bg-navy-800 p-8 md:p-12 flex flex-col justify-between text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">
                <span className="text-amber-500">S</span>yed Ahmed Ali
              </h2>
              <p className="text-gray-400 mt-1">Chief Information Officer</p>
            </motion.div>

            <AnimatedText
              text="Welcome Back"
              className="text-3xl md:text-4xl font-bold mb-4"
              type="words"
              delay={0.4}
            />

            <AnimatedText
              text="Log in to access your dashboard and manage your digital transformation projects."
              className="text-gray-300 mb-8"
              type="words"
              staggerChildren={0.01}
              delay={0.6}
            />
          </div>

          <motion.div
            className="mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-amber-500/60"></div>
              ))}
              <div className="w-8 h-2 rounded-full bg-amber-500"></div>
              {[1, 2].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-amber-500/60"></div>
              ))}
            </div>

            <p className="text-sm text-gray-400">
              Don&#39;t have an account?{" "}
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                Contact administrator
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Right side - Login Form */}
        <MotionCard
          className="w-full md:w-1/2 bg-white p-8 md:p-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-navy-900">Login</h3>
            <motion.div
              className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Lock size={20} />
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="pl-4 pr-4 py-2 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </motion.div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link href="#" className="text-sm text-amber-600 hover:text-amber-500">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-4 pr-10 py-2 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center space-x-2"
              >
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </label>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Sign in <ArrowRight size={18} className="ml-2" />
                  </div>
                )}
              </Button>
            </motion.div>
          </form>

          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm text-gray-600">
              By signing in, you agree to our{" "}
              <Link href="#" className="text-amber-600 hover:text-amber-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-amber-600 hover:text-amber-500">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </MotionCard>
      </div>
    </div>
  )
}
