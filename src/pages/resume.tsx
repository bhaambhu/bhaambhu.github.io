import React, { useState } from "react";
import { Button } from "../components/Buttons";
import Page from "../components/Page";
import Section from "../components/Section";
import { H1, P } from "../components/TextComponents";

/**
 * Three versions of the same résumé, each led by a different strength. The
 * PDFs are built from one source of truth (Documents/Sanjay/Resumes/2026/source)
 * and copied into public/resumes, so update them there and copy again.
 */
const VERSIONS = [
  {
    id: "mobile",
    label: "Senior React Native",
    bestFor: "Mobile roles: React Native, Expo, app releases and performance.",
    file: "/resumes/Sanjay-Bhaambhu-Senior-React-Native-Engineer.pdf",
  },
  {
    id: "fullstack",
    label: "Senior Full-stack",
    bestFor: "Full-stack, frontend and general software engineering roles.",
    file: "/resumes/Sanjay-Bhaambhu-Senior-Full-Stack-Engineer.pdf",
  },
  {
    id: "lead",
    label: "Engineering Lead",
    bestFor: "Team lead and engineering manager roles.",
    file: "/resumes/Sanjay-Bhaambhu-Engineering-Lead.pdf",
  },
];

export default function Resume() {
  const [selected, setSelected] = useState(VERSIONS[1]);

  return (
    <Page
      title="Résumé"
      description="Sanjay Bhaambhu's résumé in three versions: senior React Native, senior full-stack, and engineering lead."
    >
      <Section>
        <H1>Résumé</H1>
        <P>
          One career, three versions, each leading with what a different role
          looks for. Pick the one closest to the job.
        </P>

        <div className="flex flex-wrap gap-2 mt-5" role="tablist">
          {VERSIONS.map((version) => {
            const active = version.id === selected.id;
            return (
              <button
                key={version.id}
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(version)}
                className={
                  "px-3 py-1.5 rounded font-mono text-sm font-bold tracking-wider border-2 transition " +
                  (active
                    ? "bg-primary-500 border-primary-500 text-white"
                    : "bg-white border-primary-500 text-primary-500 hover:bg-primary-200")
                }
              >
                {version.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        <p className="text-slate-700 text-sm tracking-wider mt-4">
          {selected.bestFor}
        </p>
        <div className="flex flex-wrap gap-3 mt-3">
          <Button iconDownload href={selected.file} newTab>
            DOWNLOAD PDF
          </Button>
        </div>

        {/* An embedded PDF is clumsy on phones, so they get the download
            button alone. */}
        <div className="hidden md:block mt-6 rounded-lg ring-2 ring-primary-500 overflow-hidden bg-white">
          <iframe
            key={selected.file}
            src={`${selected.file}#view=FitH&navpanes=0`}
            title={`${selected.label} résumé`}
            className="w-full h-[1100px]"
          />
        </div>
      </Section>
    </Page>
  );
}
