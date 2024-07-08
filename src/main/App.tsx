import React from 'react';
import Background from '../components/background';
import Animations from '../components/animations';
import { Suspense, lazy } from 'react';
import Spinner from '../components/spinner';
import About from './about';
import RowContainer from '../components/row_container';
import Socials from './socials';

const LazyColumnContainer = lazy(() => import ('../components/column_container'));

const App: React.FC = () => {
  return (
    <>
      <Animations />
      <Background />
      <Suspense fallback={<Spinner />}>
        <div className="animated-content">
          <LazyColumnContainer>
            <About />
            <RowContainer>
              <Socials />
            </RowContainer>
          </LazyColumnContainer>
        </div>
      </Suspense>
    </>
  );
};

export default App;