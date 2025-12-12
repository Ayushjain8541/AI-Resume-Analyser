import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from '~/Components/Navbar';
import { resumes } from '../../constants';
import { resume } from 'react-dom/server';
import ResumeCard from '~/Components/ResumeCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Ayush" },
    { name: "description", content: "Ayush is personally analysing your resume" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your applications and resume ratings by Ayush </h1>
          <h2>Review your submissions and check Ayush-powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume = {resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
