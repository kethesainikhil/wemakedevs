import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/styles/tailwind.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { DevopsPageContent } from '@/content/devops';
import { DsaPageContent } from '@/content/dsa';
import { GitGithubPageContent } from '@/content/gitGithub';
import NapptiveHackathon from '@/content/Hackathons/napptive';
import Delhi2023 from '@/content/Meetup/delhi-2023';
import WebinarPageContent, { webinar } from '@/content/Webinars/index.content';

import { Loader } from '@/components/layout';
import ScrollToTop from '@/components/ScrollToTop';

const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const HashnodePage = lazy(() => import('@/pages/Hashnode'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const SingleCoursePage = lazy(() => import('@/pages/SingleCoursePage'));
const WebinarPage = lazy(() => import('@/pages/WebinarPage'));
const IndividualWebinarPage = lazy(() => import('@/pages/IndividualWebinar'));
const PerticularhackathonPage = lazy(() =>
  import('@/pages/PerticularhackathonPage')
);
const MeetupPage = lazy(() => import('@/pages/MeetupPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/courses' element={<CoursesPage />} />
          <Route
            exact
            path='/courses/dsa'
            element={<SingleCoursePage content={DsaPageContent} />}
          />
          <Route
            exact
            path='/courses/git-github'
            element={<SingleCoursePage content={GitGithubPageContent} />}
          />
          <Route
            exact
            path='/courses/devops'
            element={<SingleCoursePage content={DevopsPageContent} />}
          />
          <Route exact path='/events' element={<EventsPage />} />
          <Route exact path='/events/hashnode' element={<HashnodePage />} />
          <Route
            exact
            path='/webinars'
            element={<WebinarPage content={WebinarPageContent} />}
          />
          {webinar.map((web) => (
            <Route
              key={web.img}
              exact
              path={`/webinars/${web.slug}`}
              element={<IndividualWebinarPage content={web.details} />}
            />
          ))}
          <Route
            exact
            path={`/events/hackathons/${NapptiveHackathon.slug}`}
            element={<PerticularhackathonPage content={NapptiveHackathon} />}
          />
          <Route
            exact
            path={`/events/meetup/${Delhi2023.slug}`}
            element={<MeetupPage content={Delhi2023} />}
          />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Suspense>
  );
};

export default App;
