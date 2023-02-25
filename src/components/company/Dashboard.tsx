// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AppContext } from '@/pages/_app';
import { FC, useContext, useState, useEffect } from 'react';
import CreatePostingModal from './CreatePostingModal';
import GreetingModule from './GreetingModule';
import PostingsPreview from './PostingsPreview';
import ProgressModule from './ProgressModule';
import QuickAccess from './QuickAccess';
import Statistics from './Statistics';
import ApplicantRecommendationsModal from './ApplicantRecommendationsModal';

const Dashboard: FC = () => {
  const { postings } = useContext(AppContext);
  const [fetchedPostings, setFetchedPostings] = useState([]);
  const fetchPostings = async () => {
    const newPostings = [];
    if (postings != undefined) {
      for (let i = 0; i < postings.length; i++) {
        let response = await fetch(
          `https://bithack-backend.onrender.com/postings/${postings[i]}`
        );
        response = await response.json();
        newPostings.push(response);
      }
      setFetchedPostings(newPostings);
    }
  };
  useEffect(() => {
    fetchPostings();
  }, [postings]);
  return (
    <div className='grid h-screen grid-cols-2 grid-rows-6 gap-5 pl-5 pr-5 pb-5'>
      <ApplicantRecommendationsModal />
      <CreatePostingModal />
      <GreetingModule />
      <ProgressModule />
      <PostingsPreview postings={fetchedPostings} />
      <Statistics />
      <QuickAccess />
    </div>
  );
};
export default Dashboard;
