import PageContent from "@/components/PageContent";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageContent className="leading-relaxed">
      {/* Page Heading */}
      <h1 className={`text-3xl font-bold my-3 font-heading`}>👋🏼 Hello</h1>
      {/* About Section */}
      <div className="flex font-body leading-relaxed p-2 md:p-0 gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-4 ">
          <p>
            I’m Sanjay — but you might stumble across <code>@bhaambhu</code> in
            some corners of the internet. I work at PPFAS where I focus mainly
            on the mobile apps.
          </p>
          <p>
            I love studying new technologies, and building engaging
            multi-platform products.
          </p>
          <p>
            When I’m not in the tech zone, I’m probably playing badminton, on a
            road trip, or experimenting in the kitchen. I’ve got a soft spot for
            collecting good music.
          </p>
        </div>
        <div className="flex justify-center m-auto ">
          {/* A parent of position: "relative" is needed if you want Next/Image with fill={true} */}
          <div className="relative w-52 h-52 rounded-full overflow-hidden  ">
            <Image src="/close.jpg" fill alt="Portrait of Sanjay" />
          </div>
        </div>
      </div>
      {/* Featured Posts Sections */}
      <div className="font-body">
        <h2 className={`text-xl font-bold my-3 font-heading`}>
          ⭐️ Featured Posts
        </h2>
        <p>A curated collection of my top articles from over the years:</p>
        <ul className="list-disc block list-inside p-3">
          <li className="">
            <a href="https://mrkaran.dev/posts/nomad-networking-explained/">
              Understanding Networking in Nomad
            </a>
          </li>
          <li>
            <a href="https://mrkaran.dev/posts/clickhouse-replication/">
              Using ClickHouse Keeper for Replication
            </a>
          </li>
          <li>
            <a href="https://mrkaran.dev/posts/home-server-nomad/">
              Running Nomad for home server
            </a>
          </li>
          <li>
            <a href="https://mrkaran.dev/posts/ndots-kubernetes/">
              DNS Lookups in Kubernetes
            </a>
          </li>
        </ul>
      </div>
    </PageContent>
  );
}
