/** @jsx h */
import { h, Fragment } from "preact";
import { BaseLayout } from "../../shared/layout";

export const NewView = ({ _csrf }) => {
  return (
    <BaseLayout>
      <h2>Submit a new idea</h2>
      <form action="/ideas" method="POST">
        <input type="hidden" name="_csrf" value={_csrf} />

        <label for=""> Name* </label>
        <input placeholder="ex: alvu" name="name" />

        <label for="">
          Attribution / Source (optional)
          <br />
          <small>
            Hint: Link / username of the person that this idea is from
          </small>
        </label>
        <input placeholder="ex: github.com/barelyhuman" name="source" />

        <label for=""> Description* (can add markdown) </label>
        <textarea
          placeholder="A few words about the idea"
          name="description"
        ></textarea>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </BaseLayout>
  );
};
