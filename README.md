
# Bristol Green Furniture Transport

<p>This quote generator is designed to give prices for a fictional furniture transport service based in Bristol. It consists of a simple form with select and option elements, allowing users to generate an instant quote for furniture collection and delivery. The quote output depends on what item is being collected/delivered, and where it is being collected from. Javascript functionality changes the output depending on which options are selected by the user in the form. Clicking the 'Generate Quote' button triggers the output, as well as animating the van icon in the footer section.</p>

<a href="https://cornishcoder1.github.io/The-Green-Lorry/" target="_blank" rel="noopener" aria-label="Link to open deployed site">Link to deployed site</a>

<img src="assets/images/am_I_responsive.png">

------

## UX

This page is aimed at users in the Bristol area, who are looking for a service to pick up and deliver second hand furniture, which they may have obtained through online platforms such as Gumtree or Facebook Marketplace. The service responds to the need of young professionals living in Bristol who may not have access to their own transport to be able to pick up larger items. 

I have attempted to incorporate a relevant color scheme, using green and brown which are in keeping with the furniture theme. The page itself is simple and functional, with it's intended purpose being presented clearly from the outset. The user can generate more than one quote by changing the form options and clicking the 'Generate Quote' button to update the output.  


The color scheme consists of #F6EDD9 applied to the background, which is a pale beige color to give adequate contrast with the black heading and introductory text. I have applied #2ABB2A to the form and output divs as a bold but in keeping contrast to the lighter background color of the main page. I generated a color palette from #2ABB2A by using <a href="https://mycolor.space/?hex=%232ABB2A&sub=1">ColorSpace</a>, and this is how I found the background color. I wanted the design of the site to look simple and clean, with a modern minimal aesthetic. The animation of the van image in the footer adds a nice visual feature after a quote is generated, and serves to showcase another example of JS functionality.  

Wireframe for desktop site:


<div align="center">



![Desktop wireframe for Quote Generator](./assets/wireframes/desktop_wireframe.png)

</div>


## User Stories

As a new user I am:
- Looking for a furniture or large item collection service.
- 
- 

As an existing user I am: 
- 
- 

------

## Features 

<div align="center">

**Heading and Introduction**

The heading and introductory text clearly explain what the page is, and what service is being quoted for. 

![Screenshot of heading and introductory text](./assets/screenshots/screenshot_nav_bar.png)

![Screenshot of footer](./assets/screenshots/screenshot_footer.png)

</div>



## Features left to implement

I would like ...

------

## Technologies used

- HTML
- CSS
- Javascript
- Gitpod
- GitHub


## Other resources used

<a href="http://ami.responsivedesign.is/#"> - Am I Responsive</a>

<a href="https://balsamiq.com"> - Balsamiq</a>

<a href="https://developer.chrome.com/docs/devtools"> - Chrome Dev Tools</a>

<a href="https://mycolor.space/?hex=%23845EC2&sub=1>"> - ColorSpace</a>

<a href="http://www.flaticon.com/"> - Flaticon</a>

<a href="https://fonts.google.com/"> - Google Fonts</a>

<a href="https://www.webfx.com/web-design/hex-to-rgb/"> - Instant HEX to RGB value converter</a>


------

# Validator Testing

## HTML

A single warning was detected across all pages, advising that sections did not contain any H1 elements. Errors that were detected are detailed in the 'Fixed Bugs' section.

HTML validator result links:

<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fcornishcoder1.github.io%2Fproject1-cat-sitting-services%2F"> index.html</a>


## CSS

No errors were detected.

CSS validator result link:

<a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcornishcoder1.github.io%2Fproject1-cat-sitting-services%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"> style.css </a>

## Javascript


# Bugs

## Fixed
- if statements not accepting values separated by commas or 'or' operand - had to seperate out values in the if statements (help - John McPherson_5p)
- css not being pushed to deployed page, this was because file paths declared in HTML were absolute, so changed them to relative (help - EvanTyretMetor)
- 
- 
- 

## Unfixed

- Tried to reset van with reset button , couldn't get it to work
-  
- 


------

# Accessibility Testing

Lighthouse scored the site highly on Performance, Accessibility, Best Practices and SEO.

<div align="center">

![Screenshot of Lighthouse test result](./assets/screenshots/screenshot_lighthouse_score.png)

</div>

<br>

# Manual Testing
The website has been tested using the following browsers:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Within Chrome and Safari, the following breakpoints were checked and corresponding media queries were used:
- Large screen sizes from 1200px and down
- Medium screen sizes from 837px and down 
- Small screen sizes from 652px and down
- Extra small screen sizes from 512px and down


The following emulated devices have been tested in Dev Tools: 
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro


## Deployment 

My <a href="https://cornishcoder1.github.io/pp2_Bristol_Furniture/" target="_blank" rel="noopener" aria-label="Link to open deployed site">website</a> was deployed via GitHub Pages as follows:

1. Go to https://github.com and login
2. Navigate to the required repository (pp2_Bristol_Furniture)
3. Click on the "Settings" button
4. Click on "Pages"
5. Under "Source", click the dropdown for "Branch" select "master" and then "Save"
6. A message will then appear stating that the website is published at the deployed address 

------

# Credits 

## Content

I used the following websites for research: 

- 
- 
- 

<br>

## Media 

1. Cat hero image by <a href="https://unsplash.com/@lloydhenneman"> Lloyd Henneman</a> on <a href="https://unsplash.com/photos/mBRfYA0dYYE"> Unsplash</a> 


<br>

## Acknowledgements 

- Dave_Horrocks_5P for his help with explaining how flex elements work. 
- Dom Quail_5P for his excellent README example.
- Kevin Powell's YouTube video <a href="https://www.youtube.com/watch?v=bn-DQCifeQQ&t=8s"> 'Responsive Design Made Easy'</a> with thanks to John McPherson_5P for recommending this channel to me. 
- Love Running project for reference and guidance. 
- Victor Miclovich (Mentor)
- <a href="http://w3schools.com"> W3 Schools</a> for tips on media queries, date inputs on forms and centering tables. 