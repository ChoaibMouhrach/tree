import Link from "next/link"
import Image from "next/image"
import sideImage from "@/../public/sideImage.jpg"
import profile from "@/../public/profile.jpg"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconUser } from "@tabler/icons-react"

const links = [
  {
    name: "Portfolio",
    href: "https://yeracode.com",
    icon: IconUser
  },
  {
    name: "Linked in",
    href: "https://www.linkedin.com/in/choaib-mouhrach-3b08a5219/",
    icon: IconBrandLinkedin
  },
  {
    name: "Github",
    href: "https://github.com/choaibmouhrach",
    icon: IconBrandGithub
  },
  {
    name: "Email address",
    href: "mailto:owner@yeracode.com",
    icon: IconMail
  },
]

const Home = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] grid px-4 xl:px-0 xl:grid-cols-2" >
      <section className="relative hidden xl:block" >
        <Image src={sideImage} alt="An image of the occean" className="w-full h-full absolute object-cover top-0 left-0" />
        <div className="w-full h-full absolute top-0 left-0 Grad flex items-end p-4 italic justify-start text-background" >
          <p>
            Luis del Río
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center" >
        <div className="max-w-xl flex flex-col gap-6 " >
          <div className="flex flex-col gap-4" >
            <div className="w-24 h-24 rounded-full overflow-hidden relative border-2 border-green-700" >
              <Image src={profile} alt="profile w-full h-full absolute picture " />
            </div>
            <p className="text-muted-foreground">Experienced full-stack developer with a strong background in web development, database management, and system architecture. Adept at collaborating with cross-functional teams to drive project success. Passionate about learning new technologies and solving complex problems.</p>
          </div>
          <div className="flex flex-col gap-4" >
            {links.map((link, index) => (
                <Link key={index} href={link.href} target="_blank" className="flex items-center gap-2 text-xl hover:gap-4 animate duration-300" >
                  <link.icon className="w-5 h-5 text-green-700" />
                  {link.name}
                </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
