import { H1, H2, P } from '../../components/TextComponents'
import { HorizontalScreenshot } from '../../components/ImageComponents'
import Page from '../../components/Page'
import Section from '../../components/Section'

export default function PhpWikiCMS() {
  return (
    <Page title='WikiCMS' seoKeywords={['mysql', 'php', 'wiki', 'project', 'fullstack']} description='A framework that allows you to easily create a wiki-style page management system, supports tree-style relationships, adding questions to pages and tags to questions.' links={['features', 'why', 'tech', 'design']}>
      <Section>
        <H1>php Wiki CMS</H1>
        <P>A framework that allows you to easily create a wiki-style page management system, supports tree-style relationships, adding questions to pages and tags to questions.</P>
        <HorizontalScreenshot src='/phpWikiCMS/screenshot.png' />
      </Section>
      <Section id='features'>
        <H1>Features</H1>
        <P>
          <ul className='list-disc ml-5'>
            <li key='1'>Full Wiki CMS GUI.</li>
            <li key='2'>Simply add pages with <span className='bg-slate-200 px-1 py-0.5 rounded'>[[topicName]]</span> or <span className='bg-slate-200 p-1 rounded'>[[topicName|DisplayName]]</span> while writing the body section of any topic. It converts into a link while previewing the topic, and color of the link is according to whether the linked topic exists or is empty.</li>
            <li key='3'>Tree View.</li>
            <li key='4'>Maintains a trace of recently read topics for easily navigate back to them.</li>
            <li key='5'>Relationship between topics and questions, and questions and question-types, and there&apos;s also subjects which is another layer for grouping topics.</li>
          </ul>
        </P>
      </Section>

      <Section id='why'>
        <H1>Why I Made It</H1>

        <P>I made this project to collect knowledge on various computer science topics as I studied them. While studying one topic we often encouter new unknown terms which are separate topics that we currently don&apos;t know but might feed info upon in the future.</P>

        <P>I made this framework in which while arbitrarily writing what I learnt about a topic, I can specify terms which lead to other pages on the fly, pages that either currently exist, or terms which I might write upon in the future. I also needed to store questions related to topics, and questions to be tagged with question-types for further grouping and easier revisions in the future.</P>

        <P>This was the motivation for making this project - storing personal study notes.</P>

        <H2>Disclaimer</H2>
        <P>I made this project in 2017 but I am rebasing the commits and pushing it to github in December 2022 (that&apos;s what the commit dates above reflect).</P>
        <P>Now that I look back at it after years of experience, this project could be structured in a better way, but since php is kinda dead now, I didn&apos;t do any effort to restructure or improve this project, but someone could maybe find this project useful so I&apos;m putting this on github.</P>
      </Section>

      <Section id='tech'>
        <H1>Tech</H1>
        <P>php, MySQL, CKEditor</P>
      </Section>

      <Section id='design'>
        <H1>Design</H1>
        <P>It features a minimal design that is easy to navigate. It&apos;s built on a simple grey pallette that is easy on the eyes for long time reading.</P>
      </Section>
    </Page>
  )
}
