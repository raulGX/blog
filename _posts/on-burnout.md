---
title: "On burnout"
coverImage: ""
excerpt: 'This is not one of those "5 Steps To Tell If You have burnout" types of blog. This is about how burnout affects me and how I manage it.'
date: "2022-02-14T08:54:00.000Z"
tags: ["burnout", "behavior", "software"]
author: "raul"
---

# On burnout

This is not one of those "5 Steps To Tell If You have burnout" types of blog. This is about how burnout affects me and how I manage it.

What is burnout? I won't pretend you don't know what it is. I think everyone has or will experience it at one point during their career. Burnout and Impostor Syndrome are the two mental health issues software engineers are very likely to experience.

Some people are not very aware of their emotions, but they still find a way to be felt. The first time, for me, burnout was mostly physical. I blamed it on the stress caused by my job. It might've been true then, but now, thinking back, I know for sure it was burnout. Switching jobs fixed it, so I didn't give it much attention until it came back again. When it comes back, you feel it more intensely. Running away is not always an option, so now, I try to prevent it. We'll see what steps I take a bit later in the post.

There are 2 types that I've experienced: external and internal. Most of the literature on the subject is on external burnout. Your boss works the living light out of you until there is nothing, that's burnout. When you talk to a friend and explain your situation, it's easy to find this kind of burnout. "Your boss is such a jerk!", you will hear often. Sometimes you can do something about it, but mostly things are out of your control. The loss of control can feel overwhelming, especially when it during a long period of time! This can take a toll on your mental health and help fuel burnout.

Internal burnout is another kind of beast. You are just floating around with no direction, you have plenty of achievements, but they are not enough. It could be that you are experiencing internal burnout. I would imagine internal burnout is what a mid-life crisis feels like. I would also imagine, given the way things currently are, mid-life crisis happens to people in their 20s and 30s.

It's pretty clear that overworking yourself can burn you out, but what happens when you do little to no work. Some software development practices have periods in which developers suffer code freezes and work-life is reduced to 0. This can feel great, especially if you overworked yourself for the release. I've experienced this little voice in the back of your head: "You need to be working right now, why do you waste all day not doing work?" You find yourself doing meaningless work or nothing at all. This burned me out as well! Again, I felt this feeling of floating around in space, not going anywhere.

I told my colleagues, there is nothing to work on! They suggested I study something new, now that I have the time. Can you see where this is going? I had the time, but I didn't have the drive. There was no problem I had to solve, no direction to float towards. I've been experienced guilt, so much wasted time! Instead of embracing the rest time I had to work on my burnout, I've been burning myself more. Do you do the same?

It is important to know what burnout feels like. To fix it, you have to be aware of it. Imagine trying to work, but something pulls you back, you don't know why and you just say you are lazy. "I just have to power through the pain." You ignore what you feel, you push it away. It will come back punching, believe me. Next time you feel you are lazy, ask why?

If you take something away from this blog post, it should be this: **you should always take a second to acknowledge how you feel and resolve why you feel like this**. There is only 1 step before fixing and that is noticing. I keep this personal page in my note tracking app. When I feel a negative emotion, I write it down to think about it later. Usually, before going to bed, I look at what I wrote down that day. _When X person wrote a code review on my pull request, my first feeling was anger, and I had a feeling of proving my point (which was wrong)_ (that's an actual example.) I thought, they were just trying to make my code better, but my ego got in the way. After I process the emotion I erase the text. Feels great and it also helps me get to sleep faster! Enough sidetrack, let's go back to burnout.

Let's go through some experiences that can cause burnout.

> Why should I bother doing this feature? I think it's pointless! It won't help anybody.

Sometimes there is a disconnect between business and development. If communication doesn't go both ways, it will cause the part that develops the software burnout. You keep working on stuff that nobody will use, or a feature that is done in an unintuitive way. You try to talk and explain yourself, but with no success. Ego and bad communications skills get in the way of your words. This can be a good time to improve your negotiation and communication skills. When you expose problems clearly and provide solutions, you can sometimes get your way. But, try and continue failing and burn yourself out. Tradeoffs...

> My boss overworks me, I've told them it's not ok, but nothing changes.

Most people would say you should quit your job, but I think that is not considerate at all. Saying that myself, I know I didn't think about the other person's feelings, I just experienced a negative emotion and I had a reactionary answer. Just listen to the other person, ask them why they keep working so much even though they know it's not healthy and sustainable. It can be feelings of inadequacy or they are going through hard times and they need the bread to keep coming to the table. Sometimes your circumstances are not what you would like. Keep working, but for a better environment. Make the changes necessary or change the job!

> Deploying the app is really stressful, I have to do so many manual steps, and I'm afraid to mess something up.

This one happened on a project I worked on. We had to rush out features for a release, there was no time for automating the deployment or good quality code, to be honest. I had to deploy changes to a database. It was a reporting database that was updated a few times a day. During the deployment, we cloned the database, switched traffic to the other one until we made sure everything worked out with our features. I had to manually deploy, check, and cleanup. Doing this for a while caused a lot of stress and caused me burnout. I should have taken the time to do a proper deploy pipeline. This would have saved me so much time and suffering. Don't do the same!

> Edge case doom loops.

I think we've all had to implement something we did work with before that is complex. We can't rely on experience. The task is a bit too difficult to be able to achieve a flow state. You figure out an edge case, you take a breather to figure it out. 2 hours passed by, you are overworked, yet nothing came of it, except anxiety! The workday is over, but you can't clock out. The feeling of anxiety and the need to solve all the edge cases is still there. The next day it's all the same, you are stuck in your own head. Feelings of guilt take over because you had to do your job and you didn't. To solve this I have 2 solutions. One is hard: you have to catch yourself when you do this and write down your thoughts. The second one is TDD. I have written a previous blog post on it (link [here](/posts/testing-javascript).) When an edge case pops out, take your head away from it by writing a test. It's not solved yet, but when you'll get to it, you'll get to it. It's all-natural, you can concentrate on the problem at hand and solve the issue later. You know there is that game for toddlers, where they have a board and different shapes. TDD is building the board for you, so you can jam code-shapes into it. At the end you take a look at the board, you take out some pieces and place them in easier, instead of jamming. The workday is done, the tests are written and the feature developed. You clock out and get on with your life.

Do these questions feel familiar? Pushing the answer away will push you 1 step towards burnout. **Our mind has ways to tell us the pain we feel should be removed, and burnout is one of those ways**. Next time, listen.
