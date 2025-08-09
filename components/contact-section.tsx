"use client"

import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="section-container pb-24">
      <div className="max-w-2xl mx-auto text-center glass-effect p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-primary mb-4">建立引力链接</h3>
        <p className="text-foreground/90 mb-8">期待与你一同探索未来的可能，欢迎随时与我联系！</p>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center">
            <Mail className="mr-2" size={20} />
            yxyueeeee@gmail.com
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" size={20} />
            19550192171
          </div>
        </div>

        <div className="mt-12 text-sm text-foreground/60">© 2025 Yuan Xinyue</div>
      </div>
    </section>
  )
}
