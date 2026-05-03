// gatsby-node.js

const path = require('path');
const events = require('./src/resources/events.json');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  events
    .filter(event => event.slug)
    .forEach(event => {
      createPage({
        path: `/events/${event.slug}`,
        component: path.resolve('./src/templates/event-template.js'),
        context: {
          slug: event.slug,
          title: event.title,
          date: event.date,
          location: event.location,
          description: event.description,
          type: event.type,
          images: event.images || [],
          cover: event.cover || null,
        },
      });
    });
};