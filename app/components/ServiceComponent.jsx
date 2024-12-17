import React from 'react'
import HeroSubtitleButton from './Buttons/HeroSubtitleButton'
import CardAnimation from './CardAnimation'


const ServiceComponent = () => {
    const projectsData = {
        data: [
          {
            id: 1,
            heading: 'Authentication',
            title: "Cyber Forensics: Unveiling Digital Truths",
            description: "Cyber forensics, also known as digital forensics, is the practice of collecting, analyzing, and preserving digital evidence to investigate cybercrimes.",
            color: "#FFAC81",
            subColor: "#6067E5",
            bg:`radial-gradient(circle, hsla(0, 0%, 2%, 1) 0%, hsla(238, 42%, 30%, 1) 70%)`,
            image:{
              src:'/cardImg1.png',
              alt:'card stack sub Img',
              height:560,
              width:474,
            }
          },
          {
            id: 2,
            heading: 'Security',
            title: "Next-gen security standards to safeguard your users and data",
            description: "Extra layer of no-code security, such as bot detection, IP throttling, breached password alerting to DDoS protection and adaptive MFA, to secure user accounts and protect PII.",
            src: "/Logo.png",
            color: "#7DCFB6",
            subColor: "#45DAA0",
            bg:`radial-gradient(circle, hsla(0, 0%, 2%, 1) 0%, hsla(238, 42%, 30%, 1) 70%)`,
            image:{
              src:'/Logo.png',
              alt:'card stack sub Img',
              height:560,
              width:474,
            }
          },
          {
            id: 3,
            heading: 'High Performance & Scalability',
            title: "Build end-to-end login experiences with minimal effort",
            description: "Use our AI builder, hosted pages, and drag-and-drop workflow orchestration to set up branded sign-up and login experiences with customizable email templates.",
            src: "/Logo.png",
            color: "#F25F5C",
            subColor: "#9C65DE",
            bg:`radial-gradient(circle, hsla(0, 0%, 2%, 1) 0%, hsla(238, 42%, 30%, 1) 70%)`,
            image:{
              src:'/Logo.png',
              alt:'card stack sub Img',
              height:560,
              width:474,
            }
          }
        ]
    }


    return (
        <div>
            <section id="pricing" className="relative z-20 overflow-hidden pt-36">
                <div className="max-w-[1170px] mx-auto md:px-4 sm:px-8">
                    {/* Background elements */}
                    <div className="relative top-[72px]">
                        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-[220px]">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0">
                                <img src="/blur-13.svg" alt="blur" className="max-w-none" />
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-0">
                                <img src="/blur-14.svg" alt="blur" className="max-w-none" />
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-0">
                                <img src="/blur-15.svg" alt="blur" className="max-w-none" />
                            </div>
                        </div>
                        <div className="max-w-[830px] w-full h-[830px] rounded-full z-[9]  bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle"></div>
                        <div className="max-w-[482px] w-full h-[240px] overflow-hidden absolute -z-1 -top-[120px] left-1/2 -translate-x-1/2">
                            <div className="stars"></div>
                            <div className="stars2"></div>
                        </div>
                    </div>

                    {/* Grid lines */}
                    <div className="flex justify-center gap-[30px] relative -z-1">
                        {Array(8)
                            .fill()
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"
                                ></div>
                            ))}
                    </div>

                    {/* Content */}
                    <div
                        className="wow fadeInUp mb-[70px] -mt-[96px] text-center z-10 relative"
                        style={{ visibility: 'visible' }}
                    >
                        <HeroSubtitleButton/>
                        <h2 className="text-white mb-[18px] text-2xl font-extrabold sm:text-4xl md:text-[44px]">
                            Defensive services
                        </h2>
                        <p className="md:max-w-[714px] max-w-[400px] mx-auto font-medium mt-10 text-[#9182A0]">
                            A defensive security involves implementing proactive measures to
                            protect digital assets, infrastructure, and data from cyber threats
                            and attacks. This includes strategies such as risk management,
                            security policies, network and endpoint security, incident response,
                            monitoring/logging, patch management, and secure architecture/design.
                        </p>
                    </div>
                </div>
            </section>
            <CardAnimation props={projectsData}/>
        </div>
    )
}

export default ServiceComponent