import type { IconType } from "react-icons";
import {
  SiKotlin,
  SiQuarkus,
  SiAnthropic,
  SiArgo,
  SiGit,
  SiGo,
  SiPostgresql,
  SiGraphql,
  SiKubernetes,
  SiAngular,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiFastify,
  SiApachecassandra,
  SiRedis,
  SiOpensearch,
  SiAnsible,
  SiAmazonaws,
  SiAmazoneks,
  SiTerraform,
  SiOpensourceinitiative,
  SiGnubash,
  SiSpringboot,
  SiExpress,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiGithubactions,
  SiFirebase,
  SiSupabase,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Map a technology label (case-insensitive) to a brand icon. Anything not in
// the map renders without an icon — the label alone still shows.
const ICONS: Record<string, IconType> = {
  kotlin: SiKotlin,
  quarkus: SiQuarkus,
  claude: SiAnthropic,
  "claude code": SiAnthropic,
  "claude api": SiAnthropic,
  argocd: SiArgo,
  git: SiGit,
  go: SiGo,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  kubernetes: SiKubernetes,
  angular: SiAngular,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  css: SiCss3,
  python: SiPython,
  fastapi: SiFastapi,
  "next.js": SiNextdotjs,
  fastify: SiFastify,
  cassandra: SiApachecassandra,
  redis: SiRedis,
  opensearch: SiOpensearch,
  ansible: SiAnsible,
  aws: SiAmazonaws,
  eks: SiAmazoneks,
  terraform: SiTerraform,
  java: FaJava,
  "open source": SiOpensourceinitiative,
  bash: SiGnubash,
  "spring boot": SiSpringboot,
  express: SiExpress,
  "tailwind css": SiTailwindcss,
  docker: SiDocker,
  mongodb: SiMongodb,
  "github actions": SiGithubactions,
  firebase: SiFirebase,
  supabase: SiSupabase,
  c: SiC,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name.toLowerCase()];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}
