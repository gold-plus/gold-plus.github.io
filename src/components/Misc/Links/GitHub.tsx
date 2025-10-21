// src/components/Misc/Links/GitHub.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface GitHubLinkProps {
  owner: string;
  repo: string;
  issue?: string | number;
  pull?: string | number;
}

export const GitHubLink: React.FC<GitHubLinkProps> = ({ owner, repo, issue, pull }) => {
  const baseUrl = `https://github.com/${owner}/${repo}`;
  let href = baseUrl;
  let text = `${owner}/${repo}`;

  if (issue) {
    href += `/issues/${issue}`;
    text = `#${issue}`;
  } else if (pull) {
    href += `/pull/${pull}`;
    text = `#${pull}`;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`View on GitHub: ${text}`}
      className={clsx(styles['link'], styles['link--github'])}
    >
      <img src="/img/icons/github.svg" />
      {text}
    </a>
  );
}
