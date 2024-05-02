'use strict';

/**
 * gst-account service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gst-account.gst-account');
