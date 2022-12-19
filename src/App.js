import JobsListing from './components/JobsListing';
import data from './data';

function App() {
  return (
    <main className='container'>
      <section className='jobs-list'>
        <h3 className='lead'>Jobs Requests</h3>
        <JobsListing jobs={data.jobs} />
      </section>
      <section className='jobs-report'></section>
      <section className='job-details'></section>
    </main>
  );
}

export default App;
