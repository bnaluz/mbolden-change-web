import { client } from './client';


async function getArticleCards() {
    const articleQuery = '*[_type == "articleCard"]{ title, publishedAt, description, image }';
    const articles = await client.fetch(articleQuery);
    return articles;
}