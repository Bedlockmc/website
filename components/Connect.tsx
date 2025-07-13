import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'

export default function Connect() {
  const [copied, setCopied] = useState(false)
  const ip = 'play.vortan.xyz'

  const handleCopy = () => {
    navigator.clipboard.writeText(ip)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="connect" className="py-24 px-4 text-center bg-[#0d0d0d]">
      <h2 className="text-4xl font-bold mb-6">🌐 Connect Now</h2>
      <p className="text-gray-400 mb-4">Use the IP below to join:</p>

      <div className="inline-flex items-center bg-[#1a1a1a] px-6 py-3 rounded-full border border-gray-700">
        <span className="font-mono text-white text-lg">{ip}</span>
        <button onClick={handleCopy} className="ml-3 text-gray-300 hover:text-white transition">
          <FaCopy />
        </button>
      </div>

      {copied && <p className="text-green-400 mt-2">✅ IP copied!</p>}
      <p className="text-xs text-gray-500 mt-1">Supports 1.8+</p>
    </section>
  )
}
