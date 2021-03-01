# Scrolly

docs needed

## Requirements

jQuery some kind

## Demo

Check out demo here .... paste link here 

## How to use

It's really easy to use, simply initialise the script like this:

```
    $("#nav").scrolly();
```

To pass options to the plugin, simply pass an object to the call like so:

```
    $("#nav").scrolly({ offset: -25 });
```

## Available options

### navActiveClass (string)

If is null then navActiveClass will be voided, will be added to navigation a element when activ state is fireed
*default: 'active'*


### targetActiveClass (string)

If is null then targetActiveClass will be voided. will be added to navigation a related target element when active state is fireed
*default: 'active'*

### animate

use animation while scrolling
* **true** - simple animation with 1000 duration
* **false** - no animation 
* **object** - look at https://api.jquery.com/animate/#animate-properties-options 
For eaxample
```
{
	duration : 300,
	easing : "ease-in"
}
```
* **integer** - just animation

This tells the plugin whether it should animate the scroll when a link in your menu is click or not.
*default: false*

*default: 1000*

### offset

Include offset during calculation
*default: 0*


### container (string or jquery object) 

Scrollable target
*default: window*



