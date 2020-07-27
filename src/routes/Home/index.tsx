import React from 'react';
import Page from 'components/Page';

const Home: React.FC = () => {
  return (
    <Page>
      <form className="w-full max-w-lg form">
        <div className="form__control">
          <label className="form__label" htmlFor="grid-first-name">
            First Name
            <input
              className="form__field form__field--error"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="form__error">Please fill out this field.</p>
          </label>
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="grid-last-name">
            Last Name
            <input className="form__field" id="grid-last-name" type="text" placeholder="Doe" />
          </label>
        </div>
      </form>
    </Page>
  );
};

export default Home;
