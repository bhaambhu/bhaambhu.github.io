import { EM, H1, H2, P } from "../components/TextComponents";
import { HorizontalScreenshot } from "../components/ImageComponents";
import Page from "../components/Page";
import Section from "../components/Section";

export default function PhpWikiCMS() {
  return (
    <Page
      title="ScaleVote"
      seoKeywords={["mysql", "php", "wiki", "project", "fullstack"]}
      description="A minimal election conducting system I put up for learning Spring Boot and experimenting with scalability and real-time processing capabilities of Apache Kafka."
      links={["overview", "database"]}
    >
      <Section>
        <H1>ScaleVote</H1>
        <P>
          It&apos;s just a{" "}
          <b>
            <EM>non-serious</EM>
          </b>{" "}
          project I put up to learn <b>Spring Boot</b> and <b>Kafka</b> by
          simulating a large-scale voting process, inspired by the recent Indian
          General Elections.
        </P>
        <P>
          Lately, I&apos;ve been working with dynamically typed languages like{" "}
          <b>Python</b> (Django) and <b>JavaScript</b> (Node). While dynamic
          typing is quick and forgiving for solo projects, it can lead to
          unpredictable issues in larger teams. This led me to technologies like{" "}
          <b>TypeScript</b>, which are amazing at mitigating many of these
          issues and we see it bringing some order in chaos everyday. This got
          me wanting to revisit my childhood roots coding in Java, and to
          explore frameworks utilizing Java&apos;s strong typing and robust
          environment. This project is an exploration of building a robust and
          scalable system with Spring Boot and Kafka which is capable of
          handling high-throughput data efficiently.
        </P>
      </Section>
      <Section id="overview">
        <H1>Project Overview</H1>
        <P>
          The goal of ScaleVote is to simulate a voting system where votes are
          cast at various polling booths and processed in real-time. This is a
          draft project created for educational purposes and does not fully
          relate to a real-world voting system.
        </P>

        <P>
          <H2>Key Components</H2>
          <ul className="list-disc ml-5">
            <li>
              <b>Polling Booth UI:</b> A simple interface where votes can be
              cast. This includes options for single and bulk voting for
              demonstration purposes.
            </li>
            <li>
              <b>Producer Controller:</b> Handles the incoming vote data from
              the Polling Booth UI and sends it to the appropriate Kafka topic.
            </li>
            <li>
              <b>Kafka Topics:</b> Each political party has its own topic. Votes
              are sent to the relevant topic based on the selected candidate&apos;s
              party.
            </li>
            <li>
              <b>VoteConsumer Service:</b> Consumes votes from Kafka topics,
              aggregates the results, and saves them to a PostgreSQL database.
            </li>
            <li>
              <b>Results UI:</b> Fetches the aggregated vote counts from the
              database and displays the election results in real-time.
            </li>
          </ul>
        </P>
        <div className="flex justify-center">
          <HorizontalScreenshot src="/scalevote/sequence.png" />
        </div>
      </Section>
      <Section id="database">
        <H1>Database</H1>
        <P>
          At this draft stage I&apos;m only storing very primitive stuff you can see
          in this ER diagram:
        </P>
        <div className="flex justify-center">
          <HorizontalScreenshot src="/scalevote/er.png" className="max-w-xl"/>
        </div>
        <P>
          Realistically, the Vote entity should have a lot more information, and
          include a Voter entity having some kind of unique user identification
          (or an anonymized user uniqueness guarantee, hiding which user gave
          which vote), and the Candidate entity inherit the Voter entity (the
          candidate is a voter too), the PollingBooth entities be having more
          attributes like number of voters in the area, be linked with some kind
          of clustering entity, and so on... But, we&apos;re not being realistically
          accurate here for now!!!
        </P>
        <H2>To Be Continued</H2>
        {/* <P>
          The basic goal for now is to explore the challenges in simulating a
          large-scale voting process. I am well aware the project lacks many of
          the features and security measures required for an actual election
          system, I am ignoring that for now.
        </P> */}
        <P>
          Will experiment more and post here later.
        </P>
      </Section>
    </Page>
  );
}
