import React from "react";
import { Button } from "../components/Buttons";
import {
  PhoneScreenshot,
  ScrollableScreenshotsGallery,
} from "../components/ImageComponents";
import Page from "../components/Page";
import Section from "../components/Section";
import { EM, H1, H2, P } from "../components/TextComponents";

// Figures as of October 2026; update them with each portfolio refresh.
const stats = [
  ["~300", "job & exam notices live"],
  ["~200", "recruiting bodies tracked"],
  ["3", "clients on one backend"],
  ["~1,200", "automated tests"],
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="font-mono text-primary-500 font-bold inline-flex">
        &gt;
      </div>
      <div>{children}</div>
    </div>
  );
}

function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-700 text-sm tracking-wider leading-relaxed xsm:text-base flex flex-col gap-2 my-3">
      {children}
    </div>
  );
}

export default function SarkariAcademy() {
  return (
    <Page
      title="Sarkari Academy"
      description="A government job platform for India: structured job notices, eligibility matching, alerts, and an Android app."
      seoKeywords={[
        "sarkari academy",
        "government jobs",
        "laravel",
        "react native",
        "expo",
        "eligibility matching",
      ]}
      links={["details", "architecture", "app"]}
    >
      <Section id="details">
        <H1>Sarkari Academy</H1>
        <P>
          Millions of people in India prepare for government jobs, and the
          notices that announce them are scattered across hundreds of
          recruiting bodies, each with its own website, PDF format and update
          schedule. <EM>Sarkari Academy</EM> brings them into one place, turns
          each notice into structured data, and tells a candidate which jobs
          they are actually eligible for, from their qualifications, date of
          birth, category and other details.
        </P>
        <P>
          Each recruitment keeps its whole history in one place, from the
          first notification through admit cards and answer keys to the
          result, alongside preparation resources such as the syllabus and
          previous years&apos; papers. Candidates follow the ones they care
          about and get alerts on the web and in the app.
        </P>
        <P>
          The data pipeline that keeps it current is private. I&apos;m happy
          to walk through how it works in an interview:{" "}
          <a className="underline" href="mailto:sanjay@bhaambhu.com">
            sanjay@bhaambhu.com
          </a>
          .
        </P>
        <P>
          It is a solo project, live at sarkariacademy.com since September
          2026, with an Android app in Google Play testing.
        </P>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded ring-2 ring-primary-500 px-3 py-2"
            >
              <div className="text-2xl font-extrabold text-slate-900">
                {value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-slate-600">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <Button newTab href="https://sarkariacademy.com" iconExternal>
            WEBSITE
          </Button>
        </div>
      </Section>

      <Section id="architecture">
        <H1>Architecture</H1>
        <P>
          One <b>Laravel</b> backend on <b>PostgreSQL</b> serves three kinds of
          client, and all three call the same service classes. Business logic
          lives in services, never in controllers, so the website, the staff
          tools and the app can never disagree about a job.
        </P>
        <Bullets>
          <Bullet>
            <b>Public site and signed-in users</b>: Inertia.js with React and
            TypeScript, styled with Tailwind and shadcn/ui.
          </Bullet>
          <Bullet>
            <b>Staff panel</b>: a notice editor for positions, category-wise
            vacancies, qualifications with AND/OR rules, fees, age limits and a
            timeline of updates.
          </Bullet>
          <Bullet>
            <b>Mobile API</b>: token-authenticated JSON endpoints (Laravel
            Sanctum) for the Expo app, thin wrappers over the same services.
          </Bullet>
          <Bullet>
            Deployed with <b>Coolify</b> behind <b>Cloudflare</b>, errors in{" "}
            <b>Sentry</b>, email through Postmark and Brevo, push notifications
            through Firebase Cloud Messaging.
          </Bullet>
        </Bullets>

        <H2>Eligibility matching</H2>
        <P>
          A notice stores each post&apos;s qualifications as a small rule tree:
          groups that must all be satisfied, each holding alternatives where
          any one will do, with conditions such as subject, minimum marks,
          relaxed marks for reserved categories and years of experience. A
          candidate&apos;s profile is matched against those rules, their age on
          the notice&apos;s cut-off date, their category&apos;s relaxations and
          any quota a post is restricted to. The result is a personal feed of
          the jobs they qualify for, ordered by how soon they close.
        </P>
      </Section>


      <Section id="app">
        <H1>Android app</H1>
        <P>
          The app is built with <b>Expo</b> and <b>React Native</b> in
          TypeScript, with Google sign-in, onboarding that builds the
          eligibility profile, a personal &quot;For You&quot; feed, follow and
          push alerts, and full notice pages.
        </P>
        <ScrollableScreenshotsGallery>
          <PhoneScreenshot
            src="/sarkari-academy/app-browse.jpg"
            alt="Browse: trending jobs and jobs closing soon, by sector"
            width="240px"
          />
          <PhoneScreenshot
            src="/sarkari-academy/app-for-you.jpg"
            alt="For You: jobs matched to the candidate's eligibility profile"
            width="240px"
          />
        </ScrollableScreenshotsGallery>
        <Bullets>
          <Bullet>
            <b>Release channels</b>: internal preview builds and Play
            closed-testing builds take over-the-air JavaScript updates on their
            own channels, published by one script that tests, type-checks,
            versions and ships.
          </Bullet>
          <Bullet>
            <b>Store builds take no OTA updates</b>. Instead the app asks the
            backend which release is current. Admins manage releases, &quot;What&apos;s
            new&quot; notes and a minimum supported build from the staff panel, and
            builds below the minimum show a blocking update screen.
          </Bullet>
          <Bullet>
            Firebase Analytics and Crashlytics, with a privacy policy and
            in-app account deletion to meet Play&apos;s requirements.
          </Bullet>
        </Bullets>

        <H2>What&apos;s next</H2>
        <P>
          The long-term goal is preparation, not just alerts: multiple-choice
          practice organised into topics, topics combined into each job&apos;s
          syllabus, and a measure of how prepared a candidate is for every job
          they are eligible for. This builds on the adaptive-learning ideas from
          my research and from CAPTAIN.
        </P>
        <div className="flex gap-3 mt-2">
          <Button href="/captain">ABOUT CAPTAIN</Button>
        </div>
      </Section>
    </Page>
  );
}
