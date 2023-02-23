// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import { AppContext } from '../_app';

export default function UserPage() {
  const { application } = React.useContext(AppContext);
  const fetchApplication = async () => {
    let response = await fetch(
      `http://localhost:5001/applicants/${application}`
    );
    response = await response.json();
    if (response['yoe'] == 0) {
      setYOE('< 2 years');
    } else if (response['yoe'] == 1) {
      setYOE('2 - 4 years');
    } else if (response['yoe' == 2]) {
      setYOE('5 - 7 years');
    } else {
      setYOE('> 7 years');
    }
    setApplicantSkills(response['applicant_skills']);
  };
  React.useEffect(() => {
    fetchApplication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [yoe, setYOE] = React.useState();
  const [applicant_skills, setApplicantSkills] = React.useState('');
  return (
    <Layout>
      <div className='p-10'>
        <div className='text-3xl font-bold'>your profile</div>
        <div className='mt-5 mb-5 flex flex-col gap-16 p-5 text-xl '>
          <div className='font-bold'>years of experience: {yoe}</div>
          <div>
            <div className='mb-5 font-bold'>your skills:</div>
            <div className='flex gap-10'>
              {applicant_skills.split(', ').map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-3xl font-bold'>your next steps</div>
        <div className='mt-5 p-5 text-xl font-bold'>feature coming soon</div>
      </div>
    </Layout>
  );
}
