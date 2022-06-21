const data = [
  {
    name: "Ajay Katwe",
    title: "Backend Engineer, Boloo",
    text: "I had the privilege of working closely with Aranga while rolling out a very complex program over the course of eight months. Aranga was instrumental to the program's successful roll out and continued operations. he was always eager to help wherever he could and provided excellent documentation to the rest of the team, ensuring everyone knew exactly what to do. At our weekly planning meetings he would often raise points that the rest of the team had not considered while also providing solutions to the questions of other team members. I have enjoyed working with him immensely, and would jump at the opportunity to do so again in the future.",
  },
  {
    name: "Stef Wijnberg",
    title: "CTO, Boloo",
    text: "I've worked with Arang for a couple of months. He is one of the nicest guys I've worked with! He's really skilled at his craft and focussed on the task at hand. I will miss him a lot."
  },
  {
    name: "Jimmy van den Aker",
    title: "CEO, Boloo",
    text: "It gives me great pleasure to recommend Aranganathan for everyone who is reading this recommendation. I have known Aranganathan for 3+ years in my capacity as both co-employee, manager and CEO. Aranganathan has grown with me in our journey at Boloo, we’ve been through many challenges and Aranganathan was always able to adapt and continue.During my time working together with Aranganathan he has consistently demonstrated excellent communication and organisational skills while working on both front and backend engineering tasks. Aranganathan’s International way of thinking and broad general knowledge and interest in innovation in developing has brought him far in his journey.Aranganathan is a great person to work with and is able to process and execute assignments all by himself. Aranganathan was often let completely free to execute his tasks and we thoroughly enjoyed the way he approached and solved the different challenges.Aranganathan is a polite, well mannered and hard working employee who has shown great communication skills throughout his time at Boloo."
  },
  {
    name: "Shrihari subramanyam",
    title: "Fullstack Engineer, Anulom",
    text: "Aranga is a talented Web Developer with a keen eye for detail, but also a compassionate and effective leader, capable of managing difficult situations with incredible ease. This combination of skills - technical and human - made him perfect at him job helping aspiring junior programmers break into software development. The months I spent working with Aranga creating new projects where some of the most amazing times of my working life. Aranga is everywhere at once, knows how to make the most of limited resources and gets the job done. But it's the finesse in him technical work what makes me particularly envious! I hope I'm lucky enough to work with Aranga again in the future.",
  },
  {
    name: "Mateusz borowski",
    title: "Founder & CEO, Softheart",
    text: "Aranga was the core of the team for inspiration and ideas, providing tremendous help on the design and overall front-end userflow. he was a very dependable person, helping the team fix crucial bugs, pair programming and making the whole team feel great around him. he displayed strong mastery of React and CSS, implemented a chat feature using socket.io and even added emojis. he really showed devotion to the team and the project, and the outcome was an amazing application.",
  },
];

const QuoteIcon = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-12"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
};

export const Words = () => {
  return (
    <div className="container mx-auto pt-8">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Nice Words
      </h3>
      <h4 className="mt-2 text-gray-500 dark:text-gray-200 lg:text-lg">
        Some feedback from the people I've had the privilege of working with.
      </h4>

      {data.map((testimonial, i) => {
        return (
          <blockquote key={i} className="pl-12 mt-10">
            <div className="relative">
              <QuoteIcon />
              <div className="text-gray-700 dark:text-gray-200">{testimonial.text}</div>
            </div>

            <footer className="mt-2 italic font-bold text-gray-500 dark:text-gray-500">
              {testimonial.name}{" "}
              <span className="font-normal">&middot; {testimonial.title}</span>
            </footer>
          </blockquote>
        );
      })}
    </div>
  );
};
