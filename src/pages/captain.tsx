import React from 'react'
import { Button } from '../components/Buttons'
import { HorizontalScreenshot } from '../components/ImageComponents'
import Page from '../components/Page'
import Section from '../components/Section'
import { EM, H1, H2, SLink, P, Quote } from '../components/TextComponents'

export default function Captain() {
  return (
    <Page title='CAPTAIN' description='An intelligent tutoring system that can be used to teach any subject while adapting the course to the learner.' seoKeywords={['captain', 'ITS', 'intelligent tutoring system', 'adaptive learning', 'intelligent tutoring']} links={['details', 'features', 'philosophy']}>

      <Section id='details'>
        <H1>CAPTAIN</H1>
        {/* Explain it to a newbie */}
        <P><EM>CAPTAIN</EM> is an acronym for <EM>C</EM>omputer <EM>A</EM>ssisted <EM>P</EM>ersonal <EM>T</EM>utor with <EM>A</EM>daptive <EM>In</EM>struction. It is basically an open source learning app that is based on the philosophy that <Quote>knowledge can always be improved upon and reused indefinitely</Quote>. You create <b>topics</b> that are generalized and small enough that they can be independently improved again and again, and can be re-used in multiple study paths from various domains. A <b>study path</b> is a sequence of topics that are arranged to train a student for a particular goal. More about this has been explained in the <SLink href='#philosophy'>philosophy</SLink> section.
        </P>

        <H2>Tech</H2>
        {/* django backend, NextJS frontend for staff, and react-native app for learners. This architecture was chosen for supporting multiple devices to have their own native apps, and since django is in python its easy to apply various machine learning techniques on the data. */}

        <P>
          This project has been a closed source personal project of mine back in 2019 when it was originally implemented in PHP and MySQL, but recently I decided to make it <b>open source</b> and rebuild it from scratch on the component based approach. This project is <b>being developed</b> incrementally, so not all features in the <SLink href='#philosophy'>philosophy</SLink> section have been implemented in the open source yet.
        </P>
        <P >
          The backend is built on <b>Django</b> and uses a <b>PostgreSQL</b> database.
          <div className='flex gap-3 mt-2'>
            <Button newTab iconGitHub href="https://github.com/bhaambhu/captain-django">SOURCE CODE</Button>
            <Button newTab outline href='https://captain-django-production.up.railway.app/api/' iconExternal>DEPLOYMENT</Button>
          </div>
        </P>
        <P className='mt-6'>
          The web frontend (for staff accounts) is built on <b>NextJS</b>, which is a framework based on <b>React</b>. To access the full capabilities of the platform you need to have a staff account. Create a normal account on the platform and <SLink href='mailto:bhaambhu@gmail.com'>ping me</SLink> and I will promote you to a staff account.
          <div className='flex gap-3 mt-2'>
            <Button newTab iconGitHub href="https://github.com/bhaambhu/captain-nextjs">SOURCE CODE</Button>
            <Button newTab outline href='https://captain-nextjs-bhaambhu.vercel.app' iconExternal>DEPLOYMENT</Button>
          </div>
        </P>
        <P className='mt-6'>
          The app for learning is built on <b>EXPO</b>, which is a framework built on top of <b>React Native</b>. It is currently private and will be made public here soon.
          <div className='flex gap-3 mt-2'>
            <Button newTab disabled iconGitHub>SOURCE CODE</Button>
            <Button newTab disabled outline iconExternal>DEPLOYMENT</Button>
          </div>
        </P>
      </Section>
      <Section id='features'>
        <H1>Features</H1>
        <P>The features that have been implemented are listed below.</P>
        <H2>Path & Topic Editor</H2>
        <P>
          You can craft topics with the drag-drop supported editor, topics can have other topics as a <b>prerequirement</b> so they can be added resulting in a relationship that is synonymous to a graph - but when a staff is adding a topic B as a requirement for topic A and somewhere down the requirement chains of B we have A as a prerequirement - this should not be permitted because it means topic A requires knowledge of topic A as a prerequirement for reading topic A - but the system takes care of this and makes sure there are no requirement cycles.
        </P>
        <HorizontalScreenshot className='border md:w-full' src='../captain/path-editor-chopped.png' />
        <P>The <b>previewer</b> is designed to give the staff member a glimpse of how the topic or path they&apos;re editing will display on the phone. You can check out the previewer too.</P>
        <Button newTab iconExternal href='https://captain-nextjs-bhaambhu.vercel.app/paths/27'>CHECK OUT PREVIEWER</Button>
        <P>A topic&apos;s theory content supports editing in <b>markdown</b> format. This is done to enable all the features of github flavoured markdown and a user can structure content using various heading levels, add topics, images, links, math formulas etc.</P>
        <HorizontalScreenshot className='border md:w-full' src='../captain/topic-editor-markdown.png' />
        <H2>Subjects</H2>
        <P>Subjects can be organized using drag-drop and nested in one another synonymous to a folder structure in an operating system. A subject is a grouping for similar topics, decided by staff members. Topics can be dragged an dropped on to other subject for quick reassignment.</P>
        <HorizontalScreenshot className='border md:w-full' src='../captain/subject-editor.png' />
        <H2>User Accounts</H2>
        <P>There are different user account levels - learner account, staff account, admin account and admin can upgrade users. Sign in is done using <b>JSON Web Token based authentication</b>. The paths and topics created by a staff account belong to them only, and other staff cannot edit/change/or delete them.</P>
        <HorizontalScreenshot className='border md:w-full' src='../captain/paths-user-access.png' />

        <H2>Path Progress</H2>
        <P>The learner&apos;s every progress about reading a topic or completing a question, is all recorded to be used for learner profiling, and even improving the topic relationships for everyone (read <SLink href='#philosophy'>philosophy</SLink>).</P>
        <H2>Theming</H2>
        <P>The code has been written such that if follows a centralized theming and colors architecture - the base fonts and colors of various natures can be customized to reflect in the overall system by simply editing the <b className='font-mono'>tailwind.config.js</b> file. Also supports <b>dark mode</b> toggle (near the logo) and appropriate theme colors for dark mode.</P>
        <HorizontalScreenshot className='rounded-md drop-shadow-2xl md:w-full' src='../captain/customization-nowindow.png' />
        <H2>Upcoming Features</H2>        
        <P>Although the long term goal is to implement all of the features that align with the <SLink href='#philosophy'>philosophy section</SLink>, the features currently being developed are as follows.
          <ul className='list-disc list-inside'>
            <li>
              Bring learner app to the public.
            </li>
            <li>
              Allowing users to submit questions and classifying them to appropriate topics/subjects, then showing them to the user interface of the staff who concers with those topics, and also to the learners who have completed those topics.
            </li>
            <li>
              Adapting a new path to a learner in the start using <b>learner profiling</b> using the assessment activities and relationships between the topics.
            </li>
          </ul>

        </P>
      </Section>
      <Section id='philosophy'>
        <H1>Philosophy</H1>
        <P>The structure of a <b>topic</b> in the system is depicted through the following diagram. A topic has content in the form of steps - theory step, question step, more type of steps, and it has an evaluation activity, which could be a question or any activity that can be used to evaluate anyone&apos;s knowledge on the topic. Since the topics are tiny generalized learnable units, they can specify which other topics they require as a pre-requirement - to be completed by a student before being eligible to study this topic.
        </P>
        <HorizontalScreenshot className='mx-auto w-[60%] md:w-[40%]' src='../captain/topic-structure.png' />
        <P>An example would be topic that teaches you about calculating the mean of a bunch of numbers can be useful in study paths related to something in mathematics, statistics, machine learning, or even in some computer science related study paths. Now that topic about calculating means can be improved and revised countless times, getting better and better until its the perfect tutorial on calculating means. When a topic is improved, all the paths that contain the topic are improved in quality as a result. And this is done without disturbing all the different study paths this topic is in, because while teaching means we do it in a basic and general sense, and we do not assume the overall application that is being carried out in the path, since it could be any type of study path and our student could be from any domain.
        </P>
        <P>
          When topics can specify other topics as a pre-requirement, it creates a structure of a directed graph with topics as nodes and edges as requirement connections, but it should not have any cycles because a cycle would mean a topic somewhere down the requirement chain has itself as its own pre-requirement. <b>The system takes care of preventing formation of requirement cycles</b>, so the graph remains a directed acyclic graph as illustrated in the following figure.
        </P>
        <HorizontalScreenshot className='mx-auto ' src='../captain/dag.png' />
        <P>
          These connections are specified by subject experts who have access to the system as <b>staff</b> accounts. But the topics can be related to each other in more ways than those specified by human subject experts. When we have enough natural usage data of students using the system, studying paths and topics, we can use that usage data to <SLink href='#references'>intelligently find out more relations between topics<sup>[1]</sup></SLink>, as was found out through a test run and illustrated in the following figure.
        </P>
        <HorizontalScreenshot className='mx-auto ' src='../captain/labelled-dag.png' />
        <P>
          These relations can be used for student profiling - when the student is about to start a study path, we do not assume that the student needs to study every topic in that path, as there might be some topics that the student knows. So a small activity in the start of a path can help cut-off many topics from the path for that specific student and save so much time. This has been illustrated in detail <SLink href='#references'>my paper<sup>[1]</sup></SLink>.
        </P>
        <P>
          Also, since the topics have requirements and a study path is a sequence of some particular topics, the study path might not contain all the topics that these topics in the study path require. As a result, <b>the remaining required topics become the pre-requirements of the study path</b> as illustrated in the diagram below.
        </P>
        <HorizontalScreenshot className='mx-auto md:w-full' src='../captain/path-with-arrows.png' />
        <P>
          The <b>questions</b> are an important asset to the system and the system uses them wisely. The system <SLink href='#references'>assigns any user submitted questions to the appropriate topics<sup>[2]</sup></SLink>, and if no close match then to appropriate <b>subjects</b> (a subject is just a folder/grouping of topics). The question can then be shown to the appropriate subject experts that deal with the related topics and even to the learners who have completed those topics. This helps in getting appropriate solutions to questions and the question is attached forever to the system, <SLink href='#references'>expanding the knowledge content of the system<sup>[3]</sup></SLink> not arbitrarily but in the direction of its learners.
        </P>
      </Section>
      <Section id='references'>
        <H1>References</H1>
        <div className='flex flex-col font-mono gap-3 text-xs tracking-wider leading-relaxed xsm:text-sm'>
          <div className='flex gap-3'>
            <span>[1]</span>
            <span className='text-justify break-words overflow-clip'>S. Singh and V. Singh, “A Graph Based Approach to Learner Profiling in an Intelligent Tutoring System,” Indian J. Comput. Sci. Eng., vol. 13, no. 3, 2022, <SLink href='https://dx.doi.org/10.21817/indjcse/2022/v13i3/221303048'>doi: 10.21817/indjcse/2022/v13i3/221303048</SLink></span>
          </div>
          <div className='flex gap-3'>
            <span>[2]</span>
            <span className='text-justify break-words overflow-clip'>S. Singh and V. Singh, “Mapping User-Submitted Short Text Questions to Subjects of Study: A Multinomial Classification Approach,” in Communication and Intelligent Systems, Singapore, 2022, pp. 843–852. <SLink href='https://dx.doi.org/10.1007/978-981-19-2130-8_65'>doi: 10.1007/978-981-19-2130-8_65</SLink></span>
          </div>
          <div className='flex gap-3'>
            <span>[3]</span>
            <span className='text-justify break-words overflow-clip'>S. Singh and V. Singh, “An Architecture of Domain Independent and Extensible Intelligent Tutoring System based on Concept Dependencies and Subject Paths,” Int. J. Adv. Comput. Sci. Appl., vol. 13, no. 5, 2022, <SLink href='https://dx.doi.org/10.14569/IJACSA.2022.0130538'>doi: 10.14569/IJACSA.2022.0130538</SLink></span>
          </div>
        </div>
      </Section>
    </Page>
  )
}
