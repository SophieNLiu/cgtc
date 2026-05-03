const path = require('path');
const events = require('./src/resources/events.json');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('src/templates/eventTemplate.js');

events
  //.filter(event => event.type === 'past')
  .forEach(event => {
    createPage({
      path: `/events/${event.slug}`,
      component: template,
      context: { event },
    });
  });
};

