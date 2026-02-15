import { Container } from "components/container/base/Container";
import { socialsStyles } from "./SocialsContainer.styles";
import type { SocialsProps } from "./SocialsContainer.types";
import { Link } from "components/links/base/Link";
import {
  GitHubIcon,
  GitLabIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  DiscordIcon,
} from "components/icons/Icons";

//------------------------------------------------------------------------------
// Socials Container - Component

export function SocialsContainer({className, debug}: SocialsProps) {

  return(
    <Container as="aside" id="socialsContainer" className={socialsStyles({className, debug})}>
      <ul className="flex justify-between items-center flex-wrap gap-y-[2rem]">
        <li>
          <Link
            id="socialsContainer__link-github"
            to="https://github.com/DaniHolzer"
            children=<GitHubIcon size={24} />
            className=""
            title="GitHub"
            aria-label="Link to GitHub account"
          />
        </li>
        <li>
          <Link
            id="socialsContainer__link-gitlab"
            to="https://gitlab.com/DaniHolzer"
            children=<GitLabIcon size={24} />
            className=""
            title="GitLab"
            aria-label="Link to GitLab account"
          />
        </li>
        <li>
          <Link
            id="socialsContainer__link-x"
            to="https://x.com/DanielHolz19614"
            children=<XIcon size={24} />
            className=""
            title="X"
            aria-label="Link to X account"
          />
        </li>
        <li>
          <Link
            id="socialsContainer__link-linkedIn"
            to="https://linkedin.com/in/daniel-holzer-9963262a1"
            children=<LinkedInIcon size={24} />
            className=""
            title="LinkedIn"
            aria-label="Link to LinkedIn account"
          />
        </li>
        <li>
          <Link
            id="socialsContainer__link-instagram"
            to="https://instagram.com/daniel_holzer01"
            children=<InstagramIcon size={24} />
            className=""
            title="Instagram"
            aria-label="Link to Instagram account"
          />
        </li>
        <li>
          <Link
            id="socialsContainer__link-discord"
            to="https://discordapp.com/users/504335286700998656"
            children=<DiscordIcon size={24} />
            className=""
            title="Discord"
            aria-label="Link to Discord account"
          />
        </li>
      </ul>
    </Container>
  )
}
