import Link from 'next/link';

import Container from 'components/Container';

export default function CoverLetter() {
  return (
    <Container title="Cover letter - Aranganathan Rathinavelu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Cover letter
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I am currently working as Full Stack Developer with focus on Frontend Development (HTML,CSS,JavaScript, React, SCSS, Cypress, Webpack, etc.) and minor tasks in Backend Development (Python, Django, MySQL, Redis, Docker). I also have good experience setting up CI/CD pipelines in GitLab and GitHub, as well as some Linux experience. I also have worked with Redux, HTML, SASS and DRF.

          I've worked at four different startup companies as a Software Engineer. Six total, if you count other jobs with very short span. Each one of these has moulded my vision for my ideal position. It's an ever-evolving state which I often reflect on.

          Here's a drastically simplified example of my progression:

          1. Yay, I know programming 🎉
          2. I guess I should go to college to get job.
          3. Woohoo! Got job at Accenture 🚀
          4. Corporate job sucks. I can't do this forever.
          5. Okay, I take it back. *Solo dev is worse!.* Please get me out of here.
          6. My first startup job ! Keeping busy.
          7. Business casuals? sigh! shouldn't matter. I'm not interacting with customers.
          8. I need to work at a company with a more progressive culture. culture matters!
          9. Remote work is critical - I need to have the option to work from home.
          10. Is the product I'm working on improving other people's lives? At what scale?
          11. ➡️I want to be more than just a frontend developer - I want to utilize my skill set to its fullest.

          On a typical day i would be,

          * Responsible for the development of new and the refinement of current features to enhance our end to end client proposition.
          * Working with other Developers, Product teams and customer facing teams to define the right approach to solutions including the presentation of architecture / design strategies
          * Collaborate with the QA team to test and optimise features developed, as well as adding to our automated testing suites.
          * Working closely with the product team to spec out new features and generate new proposed strategies.
          * Making use of AWS services to support integrations with 3rd party solutions
          * Working collaboratively using agile methodologies and elements of scrum
          * Mentoring junior Developers supporting their growth
          * Play an important part in the sharing of knowledge within the Development team and contributing technical showcases

          I strongly believe i would be a good match to the position as my experience matches closely to the tools, technologies and practices  used.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
