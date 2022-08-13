export default class PortfolioDetail {

    constructor(id, images, title, shortDescription, description, startDate,
            endDate,status,client, technologies, github, demo) {
        this.id = id;
        this.images = images;
        this.title = title;
        this.shortDescription = shortDescription;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.client = client;
        this.technologies = technologies;
        this.github = github;
        this.demo = demo;

    }
  }
  