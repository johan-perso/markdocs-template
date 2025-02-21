import { Send, Github, Twitter } from "lucide-react";

const PROJECT_NAME = ''
const GITHUB_LINK = ''
const TWITTER_LINK = ''
const CONTACT_LINK = ''

export const baseOptions = {
  links: [
    GITHUB_LINK.length ? {
      text: "GitHub",
      icon: <Github />,
      url: GITHUB_LINK,
      active: "nested-url",
      external: true,
    } : null,
    TWITTER_LINK.length ? {
      text: "Twitter",
      icon: <Twitter />,
      url: TWITTER_LINK,
      active: "nested-url",
      external: true,
    } : null,
    CONTACT_LINK.length ? {
      text: "Contact",
      icon: <Send />,
      url: CONTACT_LINK,
      active: "nested-url",
      external: true,
    } : null
  ].filter(Boolean),
  githubUrl: GITHUB_LINK.length ? GITHUB_LINK : undefined,
  nav: {
    title: PROJECT_NAME,
    transparentMode: 'top',
    enabled: true
  },
};
