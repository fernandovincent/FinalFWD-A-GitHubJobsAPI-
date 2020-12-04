import React, { useState } from 'react';
import TopMenu from './components/layout/TopMenu'
import FetchJobs from './components/FetchJobs'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';
import AboutPage from './components/AboutPage';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Router>
      <div>
        <TopMenu />
        <Container className="my-4">
          <Switch>
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <h1 className="mb-4">GitHub Jobs</h1>
                <SearchForm params={params} onParamChange={handleParamChange} />
                <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error. Try Refreshing.</h1>}
                {jobs.map(job => {
                  return <Job key={job.id} job={job} />
                  })}
                  <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
              </React.Fragment>
            )} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App;