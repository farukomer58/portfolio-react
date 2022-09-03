export default class PortfolioDetail {

    constructor(id, images, coverImage, title, shortDescription, description, startDate,
        endDate, status, client, technologies, github, demo, category, tags) {
        this.id = id;
        this.images = images;
        this.coverImage = coverImage;
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
        this.category = category;
        this.tags = tags;
    }
}
