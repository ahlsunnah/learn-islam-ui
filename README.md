# بسم الله الرحمن الرحيم

إن الحمد لله نحمده ونستعينه ونتوب إليه، ونعوذ بالله من شرور أنفسنا ومن سيئات أعمالنا، من يهده الله فلا مضل له ومن يضلل فلا هادي الله، ونشهد ألا إله إلا الله وحده لا شريك له وأن محمدا عبده ورسوله

أما بعد، فـــ

## Learn Islam project

### Introduction

The project is to build an online app for learning islam with videos, texts and quizzes.

### The purposes of the project is:

- Learn Islam for ourselves to apply it and call to it, so we can earn the paradise and be protected from fire thanks to Allah's Rahmah
- Dawa to Islam
- Make it easy to learn basics of Islam for anyone (Muslims or kufars)
- Use the actual technology and new ways of learning for teaching Islam

### Partners

We are programmers, we make the app. The content will be prepared and added to the app by students. We want to make the app reusable by multiple teams of students.

The initiator of the project and first partner is [Muhammed Abu Hafs alfiransi](http://darfurqan.fr/), student in ma3ad chaykh Raslan in subk alahad (Egypt). He has permission of the Chaykh for this project.
The project will only contain videos of Chaykh Raslan. It will be available in arabic and french inchaallah.

Abu Hafs made a team composed of

- one arabic student that will transpose the videos of chaykh (if it is not available already)
- about 10 french speaking students that will translate the content of videos
- himself that write the quizzes and get corrections from arabic students.
- One french speaking student that will prepare videos (cut videos and add logos and subtitles to it, then upload to youtube)

### What is will the app contain ?

#### First step

The app will be multilingual with arabic as main language

The courses will we organized as follow:

- [x] Tracks: First track, second track, third track, ...
- [x] Courses: Nawaqid alislam, chourout la ilaha illa Allah, tafsir surat alikhlas, ...
- [x] Chapters: Chirk, Ikhlas, etc ...

- A track can have multiple Courses and a course has one track.
- A course have multiple chapters and a chapter have one course
- a course can have a topic (Aquida, Fiqh, ...) and a topic can have multiple courses
- a chapter can have multiple quizzes and a quizz have one chapter

Also:

- Chapters will contain
  - [x] youtube videos (with subtitles)
  - [x] arabic text
  - [x] current translation text
  - [x] optional vocabulary
  - [x] quizzes
- [x] We may record user progress but only locally right now.
- [x] We should make a newsletter system

#### Second step

- SEO
- UX
- User registration (google, facebook auth)
- User progress saved in the backend
- Notification system

### Direction we took

We need an app a that is like udacity.

The app and the content are separated. Developers on this project usually work only on the app. The content should come from students with approval of a salafi Chaykh .

- Simple back-end for adding content (It will be added by non-developers)
- We want the app to be
  - quick and light-weight
  - reusable, we want to be able to use the same codebase for multiple projects as much as possible

### Technology used

#### Languages

- Javascript
- Typescript
- Markdown
- HTML & CSS
- graphql

### Architecture explication

We have the data in the backend, currently it is a small nodejs app, in the future it should be a django project.

[GatsbyJS](https://www.gatsbyjs.org/) take the content from the api at build time and bundle it in the code, create static pages and js bundle. So we have a static website (for SEO and pre-rendering) and a js app

TODO: Explain gatsbyjs's architecture or link to explication

وبالله التوفيك وله الحمد والمنة وصلى الله على نبيه المختار محمد وعلى أهله وسلم

### Deployment

[![Powered by Vercel](https://raw.githubusercontent.com/abumalick/powered-by-vercel/master/powered-by-vercel.svg)](https://vercel.com?utm_source=powered-by-vercel)
