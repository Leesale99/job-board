// @flow
import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Main from '../components/layout/Main';
import { H1 } from '../components/ui';
import SearchBar from '../components/layout/SearchBar';

const GET_JOBS = gql`
  {
    jobs {
      id
      title
      description
      company {
        id
        name
        description
        location
        industry
      }
    }
  }
`;

const Intro = styled.section`
  height: 40rem;
  position: relative;
  top: -2rem;
  background: ${props => props.theme.getColor('primaryDark')};

  
  .intro__container {
    max-width: 114rem;
    width: 100%;
    margin: 0 auto;
  }

  .intro__content {
    position: relative;
    padding-top: 6rem;

    .search-bar-wrapper {
      padding: 0;
      margin-top: 4rem;
    }

    .search-bar {
      padding: 3rem;
      background: #f8f8f8;
    }

    .search-bar__input {
      background: #fff;
    }
  }
 }
`;

const ScreensHome = () => (
  <Main fluid>
    <Intro className="intro">
      <div className="intro__container">
        <div className="intro__content">
          <H1 introText color="primary">
            Your future <span>dream job</span> just <span>one click</span> away.
          </H1>
          <SearchBar />
        </div>
      </div>
    </Intro>
    <Query query={GET_JOBS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.jobs.map(job => (
          <div key={job.id}>
            <H1>{`${job.title}: ${job.company.name}`}</H1>
          </div>
        ));
      }}
    </Query>
  </Main>
);

export default ScreensHome;
