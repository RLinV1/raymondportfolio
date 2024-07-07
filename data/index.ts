export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [

    {
      id: 1,
      title: "Technologies Used",
      description: "Passion for new technologies",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "",
      titleClassName: "justify-center px-10",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Avid learner with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start text-center",
      img: "",
      spareImg: "",
    },
  
    {
      id: 3,
      title: "Currently Learning C",
      description: "What am I working on?",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "absolute -right-14 bottom-0 top-0 lg:-right-32 lg:bottom-0 lg:top-12 md:w-100 w-60 md:h-100 lg:scale-[2.2]",
      titleClassName: "justify-center",
      img: "/code.png",
      spareImg: "/grid.svg",
    },
    {
      id: 4,
      title: "Want to work on a project together?",
      description: "",
      className: "lg:col-span-5 md:col-span-6 md:row-span-4",
      imgClassName: "",
      titleClassName: "justify-center md:justify-start lg:justify-center items-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      des: "You're on this website right now!",
      img: "/portfolio.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/ZaRamen/Portfolio",
      date: 2024
    },
    {
      id: 2,
      title: "Movie App",
      des: "Designed an app that utilizes a MongoDB database that stores reviews on movies",
      img: "/movie.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/java.svg", "/spring.svg", "/mongodb.svg"],
      link: "https://github.com/ZaRamen/Movie-App-FullStack",
      date: 2023
    },
    {
      id: 3,
      title: "Survive the Infected",
      des: "A endless bullet hell game inspired by the game Boxhead",
      img: "/infected.png",
      iconLists: ["/java.svg", "/libgdx.svg"],
      link: "https://github.com/ZaRamen/Survive-the-Infected",
      date: 2022
    },
    {
      id: 4,
      title: "World's Hardest Game Clone",
      des: "Is a clone of the popular flash game World's Hardest Game. ",
      img: "/hardestGame.png",
      iconLists: ["/java.svg"],
      link: "https://github.com/ZaRamen/World-Hardest-Game-Clone",
      date: 2021
    },
  ];
  
  export const timeLine = [
    { title: "Languages", desc: [
      {
        id: 1,
        name: "Java",
        designation: "2021",
        image:
          "/java.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        designation: "2022",
        image:
          "/js.svg",
      },
      {
        id: 3,
        name: "Python",
        designation: "2022",
        image:
          "/python.svg",
      },
      {
        id: 4,
        name: "Bash",
        designation: "2023",
        image:
          "/bash.svg",
      },
      {
        id: 5,
        name: "C",
        designation: "2023",
        image:
          "/c.svg",
      },
    ]},
    {
      title: "Libraries/Frameworks",  desc: [
        {
          id: 1,
          name: "LibGDX",
          designation: "2022",
          image:
            "/libgdx.svg",
        },
        {
          id: 2,
          name: "React.js",
          designation: "2023",
          image:
            "/react.svg",
        },
        {
          id: 3,
          name: "Next.js",
          designation: "2024",
          image:
            "/next.svg",
        },
        {
          id: 4,
          name: "Apollo Server",
          designation: "2024",
          image: 
          "/apollo.png",
        },
      ]
    }, {
      title: "Other Technologies", desc: [
        {
          id: 1,
          name: "MySQL",
          designation: "2023",
          image:
            "/mysql.svg",
        },
        {
          id: 2,
          name: "GraphQL",
          designation: "2024",
          image:
            "/graphql.svg",
        },
        {
          id: 3,
          name: "Docker",
          designation: "2024",
          image:
            "/docker.svg",
        }
      ]
    }
  ];
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ZaRamen"
    },
    {
      id: 2 ,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/raymond-lin-796b8326b/"
    },
    {
      id: 3,
      img : "/gmail.svg",
      link: "mailto:rlin7289@example.com"
    }
  ];