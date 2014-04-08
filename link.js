var H5P = H5P || {};

/**
 * H5P Link Library Module.
 */
H5P.Link = (function ($) {

  /**
   * Link constructor.
   *
   * @param {Object} parameters
   * @param {Number} id
   */
  function Link(parameters, id) {
    // Add default parameters
    parameters = $.extend({
      title: 'New link',
      url: 'http://h5p.org'
    }, parameters);
  
    /**
     * Public. Attach.
     *
     * @param {jQuery} $container
     */
    this.attach = function ($container) {
      $container.addClass('h5p-link').html('<a href="' + parameters.url + '" target="_blank">' + parameters.title + '</a>');
    };  
  };

  return Link;
})(H5P.jQuery);
