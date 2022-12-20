import JobsListing from './components/JobsListing';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <main className='container'>
        <section className='jobs-list'>
          <h3 className='lead'>Job Requests</h3>
          <JobsListing />
        </section>
        <section className='jobs-report'></section>
        <section className='job-details'></section>
      </main>
    </GlobalProvider>
  );
}

export default App;
