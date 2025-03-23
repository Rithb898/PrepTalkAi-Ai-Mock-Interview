import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dummyInterviews = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "JavaScript"],
    level: "Junior",
    questions: ["What is React?", "What is JavaScript?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user2",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["NodeJS", "Express"],
    level: "Senior",
    questions: ["What is NodeJS?", "What is Express?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
];

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real Interview questions & get instant feedback
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src='/robot.png'
          alt='robo-dude'
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {/* <p>You Haven&apos;t taken any interviews yet.</p> */}
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interviews</h2>
        <div className='interviews-section'>
          {/* <p>There are no interviews available</p> */}
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
