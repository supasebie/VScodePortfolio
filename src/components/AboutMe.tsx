import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_orange icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a software developer <span className="text-work_experience_orange ">with 10+ years of experience developing </span> <span>.Net Angular React Web Apps and iOS Android mobile</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Sebastian Ruiz</h3>
            <p className="text-base leading-7 text-work_experience_orange">Full Stack Web Developer</p>
            <p className="mt-4 text-lg text-gray-500">As a seasoned software engineer, I thrive on the exhilaration of exploring and mastering the frontier of emerging technologies. My passion lies in delving deep into the digital world's newest advancements, constantly enriching my skill set and pushing the boundaries of what's possible in software development.</p>
            <p className="mt-4 text-lg text-gray-500">Having navigated the software development landscape for over a decade, I've had the opportunity to engage with a broad spectrum of both front-end and back-end technologies.</p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src='/sebie.jpeg' alt="" height={208} width={208} />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-work_experience_orange mb-1">Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Native</p>
                    </div>
                    {/* <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Spanish</p> - <p className="text-gray-500">Advanced</p>
                    </div>*/}
                  </div> 
                </div>
              </FadeIn>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
