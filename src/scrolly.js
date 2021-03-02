/*!
 * Scrolly Plugin
 * Author: infira
 * Licensed under the MIT license
 */

;(function ($)
{
	$.fn.extend({
		
		scrolly: function (options)
		{
			let defaults = {
				animate          : false,
				offset           : 0,
				container        : window,
				navActiveClass   : 'active',
				targetActiveClass: 'active',
				useLinkHash      : false
			};
			
			let debug = function ()
			{
				console.log(...arguments);
			}
			
			options           = $.extend({}, defaults, options);
			options.offset    = parseInt(options.offset);
			let $container    = $(options.container);
			let $scrollTarget = options.container === window ? $('html, body') : $container;
			let $nav,
			    $target;
			let $links        = $(this).find('a');
			
			let getTargetTop = function ($target)
			{
				let ttop = options.container === window ? $target.offset().top : $container.scrollTop() + $target.position().top;
				ttop += options.offset;
				return ttop;
			}
			
			let activateTarget = function ($nav, $target, addHash)
			{
				if (options.targetActiveClass !== null)
				{
					$('.scrollyTarget').removeClass(options.targetActiveClass);
					$target.addClass(options.targetActiveClass);
				}
				
				if (options.navActiveClass !== null)
				{
					$links.removeClass(options.navActiveClass);
					$nav.addClass(options.navActiveClass);
				}
				
				if (addHash === true && options.useLinkHash === true)
				{
					window.location.hash = $nav.attr('href').replace('#', '');
				}
			}
			
			let navclicked = false;
			$links.each(function ()
			{
				$nav    = $(this);
				$target = $($nav.data('scrolly-target'));
				if ($target.length > 0)
				{
					$target.addClass('scrollyTarget').data('scrollyNav', $nav);
					
					$nav.on('click.scrolly', function (e)
					{
						let $nav    = $(this);
						let $target = $($nav.data('scrolly-target'));
						if (!$target.parent().is($scrollTarget))
						{
							console.error("Scrolly says: in order to work propely scrollable target mu be first child of contaner:", $scrollTarget);
						}
						if ($target.length > 0)
						{
							let scrollTop = getTargetTop($target);
							navclicked    = true;
							if (options.animate !== false)
							{
								if (options.animate === true)
								{
									options.animate = 1000;
								}
								let animOptins = {
									duration: 0
								}
								if (Object.prototype.toString.call(options.animate) == '[object Number]')
								{
									animOptins.duration = options.animate;
								}
								else if (Object.prototype.toString.call(options.animate) == '[object Object]')
								{
									animOptins = $.extend({}, options.animate);
								}
								animOptins.done = function ()
								{
									window.setTimeout(function ()
									{
										navclicked = false;
									}, 30);
								};
								$scrollTarget.stop().animate({scrollTop: scrollTop}, animOptins);
							}
							else
							{
								$scrollTarget.scrollTop(scrollTop);
								//in some weird cases navclicked was set to true before $container.on('scroll.scrolly') trigger
								window.setTimeout(function ()
								{
									navclicked = false;
								}, 30);
							}
							activateTarget($nav, $target);
							
							if (options.useLinkHash === false)
							{
								// Prevent our link
								e.preventDefault();
								return false;
							}
						}
					});
				}
			});
			
			$container.on('scroll.scrolly', function (e)
			{
				if (navclicked)
				{
					return null;
				}
				let $cont   = $(this);
				let contTop = $cont.scrollTop() + options.offset;
				$('.scrollyTarget').each(function ()
				{
					$target = $(this);
					if ($target.length > 0)
					{
						let top    = getTargetTop($target);
						let bottom = top + $target.outerHeight();
						if (contTop >= top && contTop < bottom)
						{
							activateTarget($target.data('scrollyNav'), $target, true);
						}
					}
				});
			});
		}
	});
})(jQuery);