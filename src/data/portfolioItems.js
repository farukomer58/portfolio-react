import PortfolioDetail from "../models/PortfolioDetail";


const createPortfolioItem = (imageUrls, title, shortDesc, desc, client, started, ended, status, github, technologies, demo)=> {
    const item = new PortfolioDetail();
    item.id = this.initialId++;
    item.image = imageUrls; // Initialize Image Array
    item.title = title;
    item.shortDescription = shortDesc;
    item.description = desc;
    item.client = client;
    item.started = started;
    item.ended = ended;
    item.status = status;
    item.github = github;
    item.technologies = technologies;
    item.demo = demo;
    return item;
    // this.PORTFOLIO_ITEMS.push(item);
  }


export const PORTFOLIO_ITEMS=[
    createPortfolioItem(
        ['https://i.imgur.com/U3OgFnt.png', 'https://i.imgur.com/0x9A6n0.png', 'https://i.imgur.com/Ka2plSH.png', 'https://i.imgur.com/0x9A6n0.png'],
        'Vanstreek groente en fruit',
        'This is a system that brings local suppliers together with customer',
        'This was a school project with the client Vanstreek, <br> ' +
        'We needed to create a web application that offers local fruit and vegetable producers the opportunity to promote and sell their products. <br><br>' +
        'The Technologies used is listed on the right, but we used mostly Angular with Typescript for the frontend application and Spring Boot for the backend.',
        'Vanstreek',
        '15/09/2020',
        '19/01/2021',
        'Done',
        'https://gitlab.fdmci.hva.nl/se-ewa-2020-2021/vanstreek-2',
        ['HTML', 'TYPESCRIPT', 'ANGULAR', 'REST', 'SPRING', 'MYSQL', 'JPA'],
        'https://vanstreek2-fe-app-staging.herokuapp.com/'
      ),
      createPortfolioItem(
        ['https://i.imgur.com/GWkIR6X.png', 'https://i.imgur.com/LNjB4r4.png', 'https://i.imgur.com/GWkIR6X.png', 'https://i.imgur.com/LNjB4r4.png'],
        'Corendon Project Fasten Your Seatbelt',
        'System built to find and match travel partners.',
        'Project Fasten Your Seatbelt was a project created by Corendon and we as students had to realize the project, <br> ' +
        'Basically Corendon noticed many lonely travelers and wanted to have a platform were travelers could leave their interest ' +
        'and find a match with another traveler and if desired travel together <br><br>' +
        'We used technologies like HTML,CSS and Javascript with the help of a API provided by the University',
        'Corendon',
        '07/09/2019',
        '16/01/2020',
        'Done',
        'https://gitlab.fdmci.hva.nl/FYS/1920/is107/team-1',
        ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'FYSCLOUD-API', 'MYSQL', 'SQL'],
        null
      ),
  
      // CREATE PAD PORTFOLIO ITEM
      createPortfolioItem(
        ['https://i.imgur.com/EfIRPKo.png', 'https://i.imgur.com/V0ze987.png', 'https://i.imgur.com/NnAlx2i.png', 'https://i.imgur.com/V0ze987.png'],
        'Ben Sajet Project Agile Development',
        'A system where the young and old community can organize activities together.',
        'The focus of Project Agile Development was on learning us to lead a project in a Agile method SCRUM. <br><br> ' +
        'We received different lessons about the project development method SCRUM and learned a lot about it in this project ' +
        'This project was started on order of Ben Sajet. That is a company that cares for elder people.<br>' +
        'The point was so create a system what elder people could use to be in contact with the new generation and hold events together' +
        '<br>' +
        'As said the focus was on Agile:SCRUM, other technologies where Javascript, SQL, MySQL',
        'Corendon',
        '04/02/2020',
        '16/07/2020',
        'Done',
        'https://gitlab.fdmci.hva.nl/pad/19-20/bsc/team-12',
        ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'SCRUM', 'MYSQL', 'SQL'],
        null
      ),
  
      // CREATE Flask ATOM Forum
      createPortfolioItem(
        ['https://i.imgur.com/bLLUfB9.png', 'https://i.imgur.com/bHNKB17.png', 'https://i.imgur.com/BoPmdXZ.png', 'https://i.imgur.com/R6NuhRI.png'],
        'Flask Atom Forum',
        'Side project where futures off Python with Flask Framework is tested with creating a Forum app',
        'In my new semester I dived deeper into development with Python. <br><br> ' +
        'For example I started learning machine learning models with python and sklearn but I also learned to work with the Flask framework and Python ' +
        'To test my knowledge and to train my skills I created a Forum app with functionalities like: .<br>' +
        'Creating account, login, CRUD operation for creating Posts, Password forgot function, adding comments to posts etc. ' +
        '<br>' ,
        'Self',
        '10/04/2021',
        '18/04/2021',
        'Done',
        'https://github.com/Faronoz/FlaskAppBase-Forum',
        ['PYTHON', 'FLASK', 'HTML/CSS', 'BOOTSTRAP', 'SCRUM', 'MYSQL', 'SQL'],
        null
      )
]

