'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Servir / Freelancer',
        description: (
            <ul className="list-disc">
                <li>
                    I lead the analysis and design of functionalities, features and scopes according to specific internal and external customer
                    requirements.
                </li>
                <li>I coordinate the planning, development and implementation of specific projects.</li>
                <li>I manage improvements in new technologies and services within the market for constant updating and improvement.</li>
                <li>
                    I identify and evaluate possible risks that may affect the progress and development of the project, both internal and customer.
                </li>
                <li>I provide technical support to the development team, support and infrastructure for each specific client and project.</li>
                <li>I attend service improvement initiatives in the support area.</li>
                <li>
                    I manage the induction and training of the development team, both in improvements and updates to the current team, as well as to
                    new members.
                </li>
            </ul>
        ),
        badge: 'Tech Lead (Jul 2024 - Oct 2024)'
    },
    {
        title: 'BDG / G&T Continental Bank',
        description: (
            <ul className="list-disc">
                <li>
                    I led the design and implementation of innovative and efficient technological solutions that improved the bank’s operational
                    processes by 19%, increased data security, and improved the customer experience by 35%.
                </li>
                <li>
                    I supervised multiple software development projects from start to finish, ensuring they were completed on time and within budget.
                    I worked closely with development teams and stakeholders to ensure that solutions met 100% of business requirements.
                </li>
                <li>
                    I developed and executed long term technological strategies in line with the bank’s business objectives. This included the
                    adoption of new technologies, the improvement of existing infrastructures, and the assurance that all solutions were scalable and
                    sustainable.
                </li>
                <li>
                    I implemented robust security policies and procedures to protect the sensitive information of the bank and its customers. In
                    addition, I ensured that all technological solutions complied with financial and data privacy regulations, improving audit results
                    by 40% compared to previous years.
                </li>
            </ul>
        ),
        badge: 'Solution Architect (Jan 2023 - Jun 2024)'
    },
    {
        title: 'Claro CENAMPA',
        description: (
            <ul className="list-disc">
                <li>
                    Created a middleware software (MA) for the integration of the workforce management (OFSC) optimizing 100% the deployment of the
                    field force for stallation and repairs.
                </li>
                <li>Deploy our own eLearning (EduClaro) reaching 100% of employees in internal training.</li>
                <li>
                    Create and optimize a bundle of reporting backend applications, reducing by 70% the generation and delivery time to final users.
                </li>
                <li>Integrate existing apps with Azure and GCP clouds achieving a 50% increase in the efficiency of IT operations.</li>
                <li>Complete the adoption of 5G technology (Huawei) increasing mobile transfer speed in Central America by 100%.</li>
                <li>Transform old school development in new technology (Kotlin, Go, Python, etc.) 100% completed.</li>
            </ul>
        ),
        badge: 'Lead Software Engineer (Mar 2015 - Nov 2022)'
    },
    {
        title: 'Telgua, S.A. / Claro CENAM',
        description: (
            <ul className="list-disc">
                <li>Create development standards based on security and scalability for the transition to regionalization.</li>
                <li>Train several QA groups for the supervision of local developments of each country as well as their suppliers.</li>
                <li>Standardize platform and database design to eliminate inconsistencies and regional operational issues.</li>
                <li>Implement a strategy to migrate local applications to regional platforms and scalable infrastructure.</li>
            </ul>
        ),
        badge: 'Lead QA Engineer / Systems Auditing (Oct 2013 - Feb 2015)'
    },
    {
        title: 'Telgua, S.A.',
        description: (
            <ul className="list-disc">
                <li>Coordinate the developments with the supplier providing the final requirement for each request.</li>
                <li>Automated the generation of recurring reports and their delivery by email.</li>
                <li>Develop modules, triggers, SP, etc. that the vendor did not perform.</li>
                <li>Manage the licensing of LookServer and its add-ons, as well as the iSeries platform for GT.</li>
                <li>Develop LookSoftware SmartFrame integration for sales order creation.</li>
                <li>
                    Implemented IBM Suite (WAS, MQ, APIC) for company’s billing on AS400, achieving a 65% reduction in the total time of the complete
                    billing process.
                </li>
            </ul>
        ),
        badge: 'AS400 / iSeries Specialist (Feb 2008 - Sep 2013)'
    },
    {
        title: 'Grupo VICAL',
        description: (
            <ul className="list-disc">
                <li>Improved plugins written in VC++ and Delphi for JDE OneWorld (ERP) getting a 22% increase in interface loading times.</li>
                <li>Create a complete inHouse set of applications in Delphi, VB, Java and C# to improve by 33% the statistical quality control.</li>
                <li>Improve the HR module obtaning a 45% respnse inprovement in the service.</li>
                <li>Complete porting of app from S36 and S38 to RPG400.</li>
                <li>Develop the interfaces with MinTrab, IGSS and SAT, obtaning 100% certification within the estimated time.</li>
            </ul>
        ),
        badge: 'Software Developer (May 2005 - Dec 2007)'
    }
];
