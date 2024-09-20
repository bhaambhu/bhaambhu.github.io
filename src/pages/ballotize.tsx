import { useRouter } from "next/router";

export default function Ballotize() {
  const router = useRouter();
  if (typeof window === "undefined") return null;
  if (router) router.replace("/scalevote");
  return <></>;
}
