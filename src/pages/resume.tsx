import React from "react";
import { Button } from "../components/Buttons";
import Page from "../components/Page";
import Section from "../components/Section";
import { H1, P } from "../components/TextComponents";

/**
 * The full-stack résumé, which covers web and mobile. Role-specific versions
 * (React Native, engineering lead) are sent with applications rather than
 * shown here, so the site tells one story. The PDF is built from
 * Documents/Sanjay/Resumes/2026/source; rebuild there and copy it over.
 */
const RESUME = "/resume.pdf";

export default function Resume() {
  return (
    <Page
      title="Résumé"
      description="Sanjay Bhaambhu's résumé: senior full-stack engineer across web and mobile."
    >
      <Section>
        <H1>Résumé</H1>
        <P>
          Senior full-stack engineer across web and mobile: React and
          TypeScript, React Native with Expo, and Laravel.
        </P>
        <div className="flex flex-wrap gap-3 mt-3">
          <Button iconDownload href={RESUME} newTab>
            DOWNLOAD PDF
          </Button>
        </div>

        {/* An embedded PDF is clumsy on phones, so they get the download
            button alone. */}
        <div className="hidden md:block mt-6 rounded-lg ring-2 ring-primary-500 overflow-hidden bg-white">
          <iframe
            src={`${RESUME}#view=FitH&navpanes=0`}
            title="Sanjay Bhaambhu's résumé"
            className="w-full h-[1100px]"
          />
        </div>
      </Section>
    </Page>
  );
}
