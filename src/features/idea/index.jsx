/** @jsx h */
import { h, Fragment } from "preact";
import { BaseLayout } from "../../shared/layout";

export const IndexView = ({ ideas }) => {
  return (
    <BaseLayout>
      {ideas.map((idea) => (
        <li>
          <a href={`/ideas/${idea.id}`}> {idea.name} </a>
        </li>
      ))}
    </BaseLayout>
  );
};
