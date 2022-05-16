import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header, Footer } from '../components';
import { TimerContainer, TimerInput } from '../components';

const Home: NextPage = () => {
  const [time, setTime] = useState<number>(7);
  const [newTime, setNewTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();

      const difference = countDownDate - now;

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage('The Launch Has Started');
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  const handleClick = () => {
    setTime(newTime);
    // console.log(time);
    setNewTime(0);
  };

  const handleChange = (e: any) => {
    const inputTime = e.target.value;
    setNewTime(inputTime);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#211D2B] bg-[url('/assets/starsbg.svg')] py-2">
      <Head>
        <title>Countdown</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header message={message} />
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      {/* <TimerInput
        value={newTime}
        handleClick={handleClick}
        handleChange={handleChange}
      /> */}
      <Footer />
    </div>
  );
};

export default Home;
