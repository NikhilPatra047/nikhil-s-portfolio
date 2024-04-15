import mood_journal from "../../public/assets/project_images/mood_journal.png"
import comfy_sloth from "../../public/assets/project_images/comfy_sloth.png"
import dashboard from "../../public/assets/project_images/dashboard.png"
import git_search_users from "../../public/assets/project_images/GSU.png"
import color_gen from "../../public/assets/project_images/color_gen.png"
import grocery_bud from "../../public/assets/project_images/grocery_bud.png"

const projects = [
  {
    image: mood_journal,
    name: "Mood-Journal", 
    repo: "https://github.com/NikhilPatra047/ai-journal-mood",
    website: "https://ai-journal-mood-lyart.vercel.app/", 
    desc: "Mood Journal is an AI-based journal that has the OpenAI API integrated into it. With every journal entry, the GPT 3.5 analyses the user's entry to create a summary of the entry, the subject of the entry, identifies the underlying tone of the entry, and concludes if the emotions conveyed in the entry is positive or negative. The journal also features a graph that plots the mood of the user based on the entries over a span of time. Users can also ask various questions related to their entries in the application, and the GPT 3.5 answers accordingly.", 
    stacks: ["NextJS", "TailwindCSS", "Prisma ORM", "PostgreSQL", "TypeScript", "HTML"]
  },
  {
    image: git_search_users,
    name: "GitHub Users",
    repo: "https://github.com/NikhilPatra047/GitHub-Users-Search", 
    website: "https://gorgeous-zabaione-623b9f.netlify.app/login", 
    desc: "GitHub Search Users is a comprehensive tool for exploring GitHub accounts effortlessly. It allows you to view followers, language statistics, repository details, and more. The app features secure authentication and limits requests to a maximum of 60 per day for fair usage. Whether you're a developer, recruiter, or simply curious about GitHub users, this app provides valuable insights into their coding activities and projects.",
    stacks: ["ReactJS", "StyledComponents", "JavaScript", "HTML", "CSS", "FusionCharts", "React Router"]
  },
  {
    image: comfy_sloth,
    name: "ComfySloth", 
    repo: "https://github.com/NikhilPatra047/ComfySloth",
    website: "https://react-comfy-sloth-ecom.netlify.app/", 
    desc: "ComfySloth is an e-commerce web application that features variety of products. The application comes up with typical features that any e-commerce web applications have such as the ability to add items to cart and remove items from cart, proceeding to check out, an authentication system in place. The application also features the ability to select filters based on which the products will be shown. Users are also given the ability to sort the items based on name or price, and view the items that they have searched for either in grid or list format.", 
    stacks: ["ReactJS", "StyledComponents", "HTML", "CSS", "JavaScript", "React Router"]
  },
  {
    image: dashboard, 
    name: "Personal Dashboard",
    repo: "https://github.com/NikhilPatra047/Personal-Dashboard",
    website: "https://nikhilpatra047.github.io/Personal-Dashboard/",
    desc: "Personal Dashboard is a chrome extension, heavily inspired by Momentum that replaces the boring home page of Chrome with a beautiful dashboard that displays the current time as per your location, shows the current bitcoin prices, makes your day beautiful and awesome with an inspiring quote and a captivating image that refreshes every time you open a new tab.", 
    stacks: ["JavaScript", "HTML", "CSS"]
  },
  {
    image: color_gen,
    name: "Color Generator", 
    repo: "https://github.com/NikhilPatra047/Color-Generator",
    website: "https://colorgenerator-np47.netlify.app/",
    desc: "Color generator is a simple color generating application that allows you to search for various shades of any color using hexadecimal codes, and allows you to copy the shade of the color of your choice to clipboard so that you may use it wherever you need.",
    stacks: ["ReactJS", "HTML", "CSS", "JavaScript"]
  },
  {
    image: grocery_bud,
    name: "Grocery Bud",
    repo: "https://github.com/NikhilPatra047/Grocery-Bud", 
    website: "https://grocerybud-np47.netlify.app/",
    desc: "Grocery bud is your favourite buddy that comes to your rescue when you need to remember a list of items that you want to buy, the next time when you visit a grocery shop. The app features the ability to add items, edit added items, delete one item at a time, or simply the ability to clear the list altogether.",
    stacks: ["JavaScript", "HTML", "CSS"]
  }
];

export { projects };