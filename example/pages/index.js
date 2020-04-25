import { useAryanHook } from '../../use-aryan-hook';

import { toCamel } from '../lib/util';

import hookConfig from '../../use-aryan-hook/package.json';

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  const hookSettings = {
   type: 'calm',
   width: 500,
   height: 500,
   count: 2
  }

  const cage = useAryanHook(hookSettings);

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{ toCamel(name) }</h1>

        <p>{ description }</p>

        { repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              { repositoryUrlDisplay }
            </a>
          </p>
        )}
        <h2>How To Use</h2>
        <h4> npm install use-aryan-hook</h4>
        <h5>create a settings object as shown below with following options</h5>
        <p>1) Inupt Type parameter  A) calm: null, B) gray: 'g', C) crazy: 'c', D) gif: 'gif'</p>
        <p>2) Input Width and Height</p>
        <p>3) Input the number of times as count</p>
        <h2>Examples</h2>

        <h3>Set and grab message</h3>
        <p>
          <strong>Input:</strong>
        </p>
        <pre>
          <code>
    {`const hookSettings = {
    type: 'gif',
    width: 500,
    height: 500,
    count: 2
    }

    const cage = useAryanHook(hookSettings);`}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
           { JSON.stringify(cage) }
        </p>
        <p>
          { cage.map((img, i) => <img key={`img-${i}`} width={200} src={img} />)}
        </p>
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{ authorName }</a>
        </p>
      </footer>
    </main>
  );

}
