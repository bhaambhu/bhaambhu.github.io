import Head from 'next/head'
import Script from 'next/script'
import H2Header from '../components/H2Header'
import Paragraph from '../components/Paragraph'
import H1Header from '../components/H1Header'
import HorizontalScreenshot from '../components/HorizontalScreenshot'
import Navbar from '../components/Navbar'

export default function PhpWikiCMS() {
  return (
    <div className='bg-slate-50'>
      <Head>
        <title>Sanjay Bhaambhu</title>
        <meta name="keywords" content="sanjay bhaambhu, sanjay bhambhu, bhambhu, shades, shades combat, shades combat militia, kuk, cdlu, sanjay shades, sanjay bhambhu shades, shades android, shades iphone, sirsa, sarjit, shades game, shades combat game" />
        <meta name="description" content="A guy trying his best." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name="author" content="Sanjay Bhaambhu" />
        {/* OpenGraph properties */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sanjay Bhaambhu" />
        <meta property="og:title" content="Sanjay Bhaambhu" />
        <meta property="og:url" content="https://www.bhaambhu.com/" />

        <link rel="canonical" href="https://www.bhaambhu.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar title='WikiCMS' links={['features', 'why', 'tech', 'design']} />
      <Script src='./navbarScript.js' strategy="lazyOnload" />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        <H1Header title='php Wiki CMS' />
        <Paragraph>A framework that allows you to easily create a wiki-style page management system, supports tree-style relationships, adding questions to pages and tags to questions.</Paragraph>
        <HorizontalScreenshot src='/phpWikiCMS/screenshot.png' />

        <section id='features'>
          <H1Header title="Features" />
          <Paragraph>
            <ul className='list-disc ml-5'>
              <li key='1'>Full Wiki CMS GUI.</li>
              <li key='2'>Simply add pages with <span className='bg-slate-200 px-1 py-0.5 rounded'>[[topicName]]</span> or <span className='bg-slate-200 p-1 rounded'>[[topicName|DisplayName]]</span> while writing the body section of any topic. It converts into a link while previewing the topic, and color of the link is according to whether the linked topic exists or is empty.</li>
              <li key='3'>Tree View.</li>
              <li key='4'>Maintains a trace of recently read topics for easily navigate back to them.</li>
              <li key='5'>Relationship between topics and questions, and questions and question-types, and there&apos;s also subjects which is another layer for grouping topics.</li>
            </ul>
          </Paragraph>
        </section>

        <section id='why'>
          <H1Header title="Why I Made It" />

          <Paragraph>I made this project to collect knowledge on various computer science topics as I studied them. While studying one topic we often encouter new unknown terms which are separate topics that we currently don&apos;t know but might feed info upon in the future.</Paragraph>

          <Paragraph>I made this framework in which while arbitrarily writing what I learnt about a topic, I can specify terms which lead to other pages on the fly, pages that either currently exist, or terms which I might write upon in the future. I also needed to store questions related to topics, and questions to be tagged with question-types for further grouping and easier revisions in the future.</Paragraph>

          <Paragraph>This was the motivation for making this project - storing personal study notes.</Paragraph>

          <H2Header title="Disclaimer" />
          <Paragraph>I made this project in 2017 but I am rebasing the commits and pushing it to github in December 2022 (that&apos;s what the commit dates above reflect).</Paragraph>
          <Paragraph>Now that I look back at it after years of experience, this project could be structured in a better way, but since php is kinda dead now, I didn&apos;t do any effort to restructure or improve this project, but someone could maybe find this project useful so I&apos;m putting this on github.</Paragraph>
        </section>

        <section id='tech'>
          <H1Header title='Tech' />
          <Paragraph>php, MySQL, CKEditor</Paragraph>
        </section>

        <section id='design'>
          <H1Header title='Design' />
          <Paragraph>It features a minimal design that is easy to navigate. It&apos;s built on a simple grey pallette that is easy on the eyes for long time reading.</Paragraph>
        </section>
      </main>
    </div >
  )
}
