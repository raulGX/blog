---
title: "Conducting interviews as a software engineer"
coverImage: ""
excerpt: "There is a lot of information out there on interviews. I would say most of it is information on how to be a good interviewee, not a good interviewer."
date: "2020-12-18T13:53:07.322Z"
tags: ["behavior", "interview", "software"]
author: raul
---

# Conducting interviews as a software engineer

There is a lot of information out there on interviews. I would say most of it is information on how to be a good interviewee, not a good interviewer. I also think that the interview mini-game is not played right and is plagued with wrong behaviors.

Conducting interviews is one of those skills that nobody is taught. You see how the people that interview you behave and you will copy them once you begin conducting interviews yourself. Speaking on my behalf, bad interviews are energy drains, no matter which side of the table your chair is in. Let's see how we can improve this experience.

You have to make sure you know what the purpose of the interview is! Make sure you speak with the people person inside your company responsible for the hiring process. What is the purpose of the interview? It could be seniority level (senior, junior, unicorn, ninja) or the ability to communicate solutions to complex problems.

## About starting the interview

I like to start out by asking about prior job experience. You should study their resume and have some questions prepared. Listen carefully and make sure the other person knows you are engaged in the conversation. Don't talk about yourself unless asked to. I've been part of interviews where people conducting the interview won't stop talking about themselves and their experiences.

If you have questions, make sure they are well thought out. Don't ask: _Tell me about yourself_. It's a bit too personal and way too open-ended. Stay away from: how old are you, do you have a partner, do you plan on having children. Those questions are creepy, and, in some places, illegal.

The start of the interview should be easy-going. You just want to get to know the other person.

> Tell me one thing that you had to struggle with in your career.

Bad managers, horrible colleagues, spaghetti codebase, caffeine addiction. People get to deal with lots of things and trust me, they have an answer for this question.

> What is a difficult problem that you had to solve.

This one, I have to admit, is mostly for myself. I love to hear solutions to difficult problems. Sometimes you see a problem they hated to solve, sometimes it's something they love.

Respect their time! We live in a society where people pay with their time to get interviewed for your company's job. Try to be concise and efficient with your time.

When you have a good sense of the interviewee, it's time to ask something technical. Avoid the pop quiz strategy of asking: what is **insert javascript technical term like closure, this, prototype**. People study those terms for interviews. Find real code examples and have the interviewee explain what is going on. Don't make them feel bad about not knowing or getting some things wrong. Explain the concept briefly and move on. If they have a bad time, don't be mean. Let them know everyone is not at 100% during interviews, as they might be difficult at times.

## What to ask

Don't test like your high school math teacher. This should feel like a discussion between colleagues, not that time your literature teacher quizzed you about some dull novel that you spaced out while trying to read. Have a bit of awareness of how the conversation is going. Acknowledge from time to time that interviews are not quizzes, but conversations. We are people, stress doesn't always bring up the best in us. If the person you are interviewing doesn't feel stressed, you will get the best impression of who they are.

A good skill for software engineers to have is to break complex problems into smaller ones. Sometimes I ask about problems we had to solve during the job, like a bug or a complex feature. Have this prepared. If you just thought about this on the fly, chances are you won't explain it properly. If nothing comes up, ask people to break down youtube or facebook into components (this can be a frontend and a backend question). If you take notes, make sure you let them know. If you type while they answer it might look like you are not paying attention.

> Center this div

Oh, how horrible is this one. For some people flex is not enough. You have to use this cryptic solution that will never go past code review. If you have to test for CSS knowledge, find a more creative problem. Have a simple design that they can implement or a fun CSS Battle exercise. You want to test for the ability to do their job, not some weird edgy problem.

I don't enjoy live coding exercises, but if you do there are some things you should keep in mind. Don't write code on a whiteboard, unless the person chooses to do this. Let them know there is going to be some coding involved. Ask them what they prefer to type on, so you can have it prepared. They can bring their own laptop or do the interview over the internet.

> Here is this algorithm you will never use during the job. Write the solution in this MS Word document.

Don't be this sadistic. What does this elitist way of coding have to do anything with the job? First of all, who codes in MS Word? Also, nobody reverses a binary tree on the job. If you have to solve it, you can ask a colleague to explain the solution or google it. Look for what matters.

If the job requires a lot of algorithmic thinking, think of a real-world problem. If they find a solution that uses an algorithm, just stop it there. There is no point in making them implement it. Abstract the algorithm into a function and carry on.

Don't expect the interviewee to have the same preferences as you. If they enjoy redux as much as you, it doesn't mean they are a better or worse programmer. Hear the person out. If you don't agree with them, make sure you are on the same wavelength. Ask why and then say your opinion. Make a joke and move on, don't dwell on disagreements.

## Don't be tricked by your bias.

My job is best done by a person exactly like me. It's too easy to think that and to interview for that. Keep in mind not all software engineers should be the same. Heterogeneity is a good thing. Some people are good with databases, other people are great at communicating. There is a place for everyone. It's your job to determine if it is a good fit.

Some people mask discrimination with not being a good fit or incompatible with the company culture. This has happened with a person I interviewed. I thought they would be a great teammate. I gave in my good feedback and was excited to hear if they accepted the position. Somewhere up the management chain, someone decided that being of an older age would make them "not compatible with the company culture." Don't be like that, be as objective as possible.

Knowing what to ask is the easy part, you can prepare your questions before the interview depending on what seniority the interviewee is. You should have similar questions for every person. This makes it fair for everyone and it will make giving feedback easier, i.e. comparing people - ugh - easier.

## What to look for

When I first started conducting interviews, I was co-chair to a more senior person. I didn't get to talk a lot, but that was okay. Instead, I paid attention to the other people speaking. Sometimes my co-chair was getting too much time to speak and I would try to move the microphone to the other person. Not concentrating on what to ask next allowed me to be more aware of what was being discussed. People have different personalities, if you co-chair with someone, make sure you work together.

Now, the most difficult part of the interviewing process. **You need to ask questions, pay attention to the answers, and be aware of a few concepts**. It's easy to be lost in yourself, believe me. You can try to be cool and ask edgy questions - try to prove to the other person you are better, but that is not the point. You'll have plenty of time on the job to do that - just kidding, don't be an ass!

**Keep track of intuition.** Solving a problem once will, hopefully, make you solve it easier the next time. With time we develop our intuition, it makes work easier. Sometimes you ask a question and you can see the interviewee's intuition kick in. You can feel they want to stop you from speaking and answer the question. This can be a tell for someone's seniority. It goes well with the next concept to be aware of.

**Keep track of the ability to track patterns.** Redux is just like the command pattern used in Microsoft Excel. You can see patterns everywhere. As a software engineer, you have to be prepared to not repeat yourself. Patterns also make communication easier. You can only use this one object, you can't make more - Singleton. We need to send a message and some parts of the system have to subscribe to it - Observer/Pub-sub. You don't need to see how a row in a database is saved, just wrap it around an object - Facade/Adapter. You don't necessarily have to ask for the names of the patterns, just see if the person can see them.

**Keep track of commitment.** This one is really hard. Can you tell if this person will do their job? You can test for IQ, and other meaningless stuff, but are they gonna use their skills to do the job or just slack off? That's kind of a hot take, what do I mean by IQ is meaningless? You need a certain ability to be able to solve problems, but that doesn't mean that will keep you focused and direct you towards doing the job right!

Some people say "you are in IT just for the money! You have to love it! It must a hobby! You HAVE to spend your off time learning new stuff!". I say get over yourself. A job is a job, don't be romantic about it. Sometimes our job is our job, not our passion. That doesn't mean we don't do it well and don't find meaning in it. Usually, a good tell is how a person responds to a problem. You don't necessarily want to look for excitement in solving the problem. They have to have a spark. Some people feel stressed during the interview. You have to see if they like solving the problem. This one can be on you! If you ask something too edgy, they might get put off, so try to have something tailored to their persona. Design **this app that you use**. Let's make an app for **this hobby of yours**.

Most important, **Can this person be your colleague?**. At the end of the day, an interview is a simulation of you working with another person. Does the job require a lot of teamwork or is it more of a here's a task, see you when you are done-kind of situation. Can you steer the person away from a wrong path or do they ignore you completely? Do they ask questions when stuck or didn't understand?

Interviewing is a skill. Be well prepared and considerate!
