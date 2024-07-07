import React from 'react';
import Background from '../components/background';
import Animations from '../components/animations';
import { Suspense } from 'react';
import Spinner from '../components/spinner';
import ColumnContainer from '../components/column_container';
import About from './about';
import RowContainer from '../components/row_container';
import Socials from './socials';

const App: React.FC = () => {
  return (
    <div>
      <Animations />
      <Background />
      <Suspense fallback={<Spinner />}>
        <div className="animated-content">
          <ColumnContainer>
            <About />
            <RowContainer>
              <Socials />
            </RowContainer>
          </ColumnContainer>
        </div>
      </Suspense>
    </div>
  );
};

export default App;