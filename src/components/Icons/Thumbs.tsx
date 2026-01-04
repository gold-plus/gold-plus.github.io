import { SVGProps } from "react";

export function ThumbsUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M15.056 9.004q.692-2.14.693-3.754c0-2.398-.939-4.247-2.5-4.247c-.847 0-1.109.504-1.437 1.747c.018-.065-.163.634-.215.821q-.152.539-.527 1.831a.3.3 0 0 1-.03.065L8.174 9.953a5.9 5.9 0 0 1-2.855 2.326l-1.257.482a1.75 1.75 0 0 0-1.092 1.967l.686 3.539a2.25 2.25 0 0 0 1.673 1.757l8.25 2.022a4.75 4.75 0 0 0 5.733-3.44l1.574-6.173a2.75 2.75 0 0 0-2.665-3.43z"/>
    </svg>
  );
}

export function ThumbsDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M15.056 14.183q.692 2.139.693 3.753c0 2.398-.939 4.247-2.5 4.247c-.8 0-1.078-.45-1.383-1.546l-.27-1.022q-.15-.538-.526-1.83a.3.3 0 0 0-.03-.066l-2.866-4.485a5.9 5.9 0 0 0-2.855-2.327l-1.257-.481A1.75 1.75 0 0 1 2.97 8.458l.686-3.538a2.25 2.25 0 0 1 1.673-1.758l8.25-2.021a4.75 4.75 0 0 1 5.733 3.44l1.574 6.172a2.75 2.75 0 0 1-2.665 3.43z"/>
    </svg>
  );
}
