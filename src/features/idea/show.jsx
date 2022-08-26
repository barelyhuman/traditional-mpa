/** @jsx h */
import { h, Fragment } from "preact";
import { BaseLayout } from "../../shared/layout";

export const ShowView = ({ idea }) => {
  return (
    <BaseLayout>
      <h1>{idea.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: idea.descriptionHTML }}></div>

      <p>From: {idea.source || "Anonymous"}</p>
    </BaseLayout>
  );
};
