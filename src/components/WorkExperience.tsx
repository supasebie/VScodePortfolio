import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Amada America | Senior Back End .Net Developer.',
    date: 'Aug 2023 - April 2024',
    description: [
      'Led the reverse engineering of a monolithic system framework, enhancing scalability and maintenance capabilities.',
      'Directed the final build release of Influent automation software, ensuring robust functionality and client satisfaction.',
      'Optimized SQL stored procedures to improve data retrieval efficiency through APIs, enhancing application performance.',
    ],
    image: { url: '/work/amada.jpeg', height: 125, width: 175, className: 'rounded-none' },
  },
  {
    title: 'biBERK | Full Stack Software Developer.',
    date: 'October 2021 - April 2023',
    description: [
      'Contributed to the redevelopment of the Workers Compensation insurance product using Angular 15.0 and .Net 6.0.',
      'Educated external company teams on integrating biBERK\'s APIs for creating customized insurance products.',
      'Bridged communication between front-end and back-end teams, ensuring coherent and unified project development.',
      'Facilitated daily stand-ups and weekly scrum meetings to clarify technical requirements and distribute tasks among team members.'
    ],
    image: { url: '/work/biberk.png', height: 125, width: 175, className: '' },
  },
  {
    title: 'OverNineThousand | Full Stack Software Developer.',
    date: 'December 2019  - October 2021',
    description: [
      'Spearheaded the development of front-end and back-end solutions for emerging and established businesses using modern and legacy technologies.',
      'Maintained an international, around-the-clock schedule to ensure continuous high productivity in a fully remote setting.',
      'Prioritized deliverables based on business needs to ensure timely and error-free product delivery.',
      'Adapted technologies for multiple devices, ensuring broad accessibility and optimal user experience.',
      'Ensured secure operations employing industry-standard security measures and maintained proficiency with various collaboration tools.'
    ],
    image: { url: '/work/9001.webp', height: 125, width: 175, className: '' },
  },
  {
    title: 'RapidVisa | Full Stack .Net Developer',
    date: 'July 2016 - December 2019',
    description: [
      'Served as the lead .Net developer, collaborating directly with management to innovate and implement new features.',
      'Engaged in international travel for the training and optimization of remote development teams.',
      'Transitioned application storage to cloud-based solutions, enhancing the scalability and efficiency of services.',
      'Redesigned the front-end framework, improving user experience from WebForms static to a fully responsive design.',
      'Transitioned to Azure DevOps for enhanced project management and streamlined remote team collaboration.',
      'Represented RapidVisa at industry conferences to stay ahead of technological trends and integrate innovative solutions.'
    ],
    image: { url: '/work/rapidvisa.png', height: 125, width: 175, className: 'bg-white' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
