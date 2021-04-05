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
*default: window*
Scrollable target container <br/>
target elements must be first child of container, like so
```html
<div class="container">
    <div id="page1">...content</div>
    <div id="page2">...content</div>
</div>
```
not like this
```html
<div class="container">
    <div class="inner">
        <div id="page1">...content</div>
        <div id="page2">...content</div>
    </div>
</div>
```
And container css position should be relative

### navActiveClass (string)
What class to add to nav item on active state

### targetActiveClass (string)
What class to add to scrollable item on active state

### useLinkHash (boolean)
What class to add to scrollable item on active state

### useLinkHash (boolean)
When true then url hashes is added to url 


