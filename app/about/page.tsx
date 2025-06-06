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
            <p>I’m Aisyah Nabillah, a passionate data enthusiast with a strong foundation in data analysis, visualization, and machine learning. I hold several certifications, including Data Scientist, Data Scientist Associate, Data Analyst Associate, and SQL Associate from DataCamp.</p>
            <p>My projects showcase hands-on experience with Python, SQL, and tools like Jupyter Notebook and Tableau. I enjoy exploring real-world data, uncovering insights, and presenting findings in a clear, impactful way. I’m particularly interested in the intersection of data science and product improvement, and I’m always eager to learn new techniques and technologies.</p>
            <p>In addition to data, I have experience in web development and speak multiple languages, including English, and Indonesian.</p>
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