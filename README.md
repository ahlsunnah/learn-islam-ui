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

The courses will we organized as follow (it may change in future):

- [x] Sections: Usul addin, tafsir, fiqh, non-muslims, ...
- [x] Courses: Nawaqid alislam, chourout la ilaha illa Allah, tafsir surat alikhlas, ...
- [x] Chapters: Chirk, Ikhlas, etc ...

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
- User progress in back-end
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

#### Plateforms

- [GatsbyJS](https://www.gatsbyjs.org/): Blazing-fast static site generator for React
- [Django](https://djangoproject.com): Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

#### Libraries

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [Redux](http://redux.js.org/): Redux is a predictable state container for JavaScript apps.

#### Design

- [Tachyons](http://tachyons.io/): Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.

#### Code style, linting and error checking

- [Prettier](https://github.com/prettier/prettier/): An opinionated code formatter.
- [ESlint](https://eslint.org/) with [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript): The pluggable linting utility for JavaScript and JSX

### Architecture explication

We have the data in the backend, currently it is a small nodejs app, in the future it should be a django project.

Basic structure of the data can be find [here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Learn%20Islam#R7Zpbb6M4FMc%2FTV5XsYG0eWzo3KRWGm12tbuPLjhgjbGRMU0yn36PwYRQwiybUGYeXEUVPviCz8%2BX%2F7G88MLs8EmRPH2WMeULvIwPC%2B9xgfGdv4b%2FxnCsDcHaGhLF4tqEWsOWfafWuLTWksW06GTUUnLN8q4xkkLQSHdsRCm572bbSd5tNScJ7Rm2EeF9618s1mltvcd3rf0zZUnatIxWtn8vJPqWKFkK294Ce7vqr36dkaYu29EiJbHcn5m8DwsvVFLq%2Bik7hJQb1zZuq8t9HHh7%2Bm5FhR5TANcFXgkvbde34E8mhf08fWxcUuxZxomA1GYnhd7aN0tIRynj8RM5ytK0WWjwQZPapFKx75CfcHiFwACvlbbE8crUxjgPJZcKDEJWDbSFtqYy24yiBRT72vQNvTE9k0Mn4xMpdPOBknOSF%2Byl%2BmRTMCMqYWIjtZaZzdR08OPZ97T4vE3ftdbbr1RpejgzWVd%2FojKjWh0hSzMvLHU7K%2B7u6%2BS%2BHWLIt1nS8%2BEVrOzQtsM6OdXcooUHS%2Fcyaa9HeoE3Zl4xbbzyAI%2FPW62YSHrooXe6IqfkN%2FoG1QV6hLNEQJLTnSlm3MNgaj1Ys5a5qSwnEbT1VOV59FvL77bfxiSh7I5X8yNlcUyFgSs10eTlNPhyyYSu%2FBJs4AfuC5e%2FBYsAPjyENGrT8DPZlQ6lgL4QVnGkMEz21AyVC4TxaMIWKV6NQ4onIOoPEJUqpqomKsrsBZ4d0KuBBng%2BoMEAUNgKI8XyalmuJ%2Brzo2N6PdOx6%2B4UTPH9AFQuE1nT%2FJIZNeJ4Xs0TLf35gHrLAaAFL5MaqNtGbybaeHkOoqhPNJSlKvpz0mng2zWwf60IbsrdhBr1UDsV%2FJ%2FT9zRBfkkZjPoxrNPB0yOdUwijoWDVKeGJqY5dfT08gRS%2Bc1L43YEiNFI5eRNsp97Qduq08JRI%2FRmRov6pUpiSXF%2FYPZ0anl4Ne2NZT3ImjIZOnJwc%2FtEM9kdT%2FhlyeOXk8AxIZ5XDQ8IpghWx6oOTwrcTnfVUeD0U4JSKtNGNm6c3U533bHgobnV6eEqkcx4O40shzht4VMQP5tIJpGJGMiniP1JmHAkvjHa0boRUo3KN51OdNQoYnKGOf58n%2FjFlwKc%2FEJmgmhNqTdaHNO5ca%2Bl78NxjK%2BsxRTksOa%2B0U%2Fkll9nqvprRcKZgV%2FcdBYt8r1tFIUsVUVuqdXy%2FItyVwqhZJJuK6g73KqoInvo4DuqlI8OpoQ6Cqx3SHf0%2Fg9yb0OPk%2F%2F8LLvDWnYpwsHw3cP0F9s%2FChabvEpqur41Mmx33pmV36HILzQjjbiu9iPg0O37JwHTwesuOUXM90yDVx9wd%2F94CdM6wFA%2BdNDig0wF9x6gUku1F43ozbi9zex%2F%2BBQ%3D%3D), it may not be up to date though.

[GatsbyJS](https://www.gatsbyjs.org/) take the content from the api at build time and bundle it in the code, create static pages and js bundle. So we have a static website (for SEO and pre-rendering) and a js app

TODO: Explain gatsbyjs's architecture or link to explication

وبالله التوفيك وله الحمد والمنة وصلى الله على نبيه المختار محمد وعلى أهله وسلم
