import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8
      border rounded-xl border-gray-700/50 p-5 sm:p-10
      backdrop-blur-xl bg-black/80">

        <Link href="/">
        <Button variant="ghost" className="hover:bg-black
        hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
          Back <BsArrowLeft className="ml-2" />
        </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          via-sky-300 to-blue-500">About Me</h1>

          <div className="space-y-4 text-neutral-200 text-pretty
          tracking-tight">
            <p>I’m Aisyah Nabillah, a data-driven problem solver with a strong background in data engineering, analysis, and applied machine learning. I enjoy designing efficient data pipelines, building predictive models, and turning raw information into meaningful insights that drive better decisions.</p>
            <p>I hold several professional certifications, including the <strong>DataCamp Professional Data Scientist</strong>, <strong>BNSP Junior Web Developer</strong>, and <strong>HackerRank Software Engineer</strong>. My expertise covers Python, SQL, and cloud-based workflows for data processing and analysis.</p>
            <p>I’m passionate about bridging the gap between data and real-world applications. Whether it’s optimizing data infrastructure, enhancing analytical workflows, or leveraging AI to uncover deeper insights, I aim to build scalable and intelligent solutions that create measurable impact and improve user experiences.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold
            text-transparent bg-gradient-to-r from-emerald-400
             to-blue-500">Education</h2>
             <div className="space-y-2">
              <p className="font-medium">Bachelor of Science in Computer Science</p>
              <p className="text-neutral-500">BINUS Online Learning, 2022-2026</p>
             </div>
          </div>

{/*          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold
            text-transparent bg-gradient-to-r from-emerald-400
             to-blue-500">Professional Experience</h2>
             <div className="space-y-4">
              <div>
                <p className="font-medium">Role ???</p>
                <p className="text-neutral-500"> Company X, 2025-2025</p>
              </div>
             </div>
          </div>*/}
        </div>
      </main>
    </div>
  )
}

export default page