# Milestone Project 2
***

## <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="32" height="32">_KeyWord! the Game_
***

## What does it do and what does it need to fulfill?
This milestone project creation is the culmination of learning and study from the fourth and fifth modules of the Full
Stack Developer Course, Javascript Fundamentals & Interactive Frontend Development, to build a custom mobile-first fully
responsive Vanilla javascript game called "KeyWord!" <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="16" height="16">.

### Functionality of Project.
At its core, this project is built using HTML5, CSS3 and Vanilla Javascript to make the individual features of the game
work. The above three programming languages were used in conjunction with the Bootstrap Framework to ensure the project 
itself is as responsive as possible for use amongst the current everyday screen device sizes such as, Mobile, Tablet and Laptop.

The used throughout the build was imported into the HTML from Google Fonts and is called <a href="https://fonts.googleapis.com/css?family=Bangers&display=swap">'Bangers'</a>,
creating a retro-ish vibe to accompany the overall theme of the Game itself.

This project went outside the original brief as detailed by the course, in the hopes that it would showcase the skills
I have obtained since the last Milestone submission, and is my own custom version of a keyboard typing skills game I
played as a child/young teen, (of which I can only vaguely remember now on our old family HP PC in the early 2000s and
can't remember the name of).

## User Experience.

#### User Stories:

_Generic User (gamer):_
* As a user, I want a game to help my typing skills get faster.
* As a user, I want something fun to challenge my typing skills.
* As a user, I want a mobile friendly game to play whilst on the go via my mobile phone/tablet.
* As a user, I want a game that will help my children learn to type.
* As a user, I want a fun game for my kids to help with their spelling.

For a generic user, the game assists in fulfilling these goals by:
* Creating clean, aesthetically pleasing visuals.
* Allowing the user to dynamically set the words via Theme and the difficulty to set the timer on the "Main menu".
* Setting the core design process of the application to be Fully Responsive via Bootstrap Mobile First approach.
* Enticing themes such as popular current media trends in Pokemon & Superheroes for Children and then engaging the more mature audience with Beaches & Crossfit.
* Allowing a parent to have a game on their devices that is child-friendly and will assist in cognitive learning abilities such as increasing hand-eye coordination and enhancing grammar and linguistics skills.

_Developer:_
* As a developer, I want to create a pure Javascript game to test my skills to date.
* As a developer, I want to create fully responsive app to showcase my skills to a potential employer.
* As a developer, I want an on-going project I can enhance and improve over time as my skills grow.
* As a developer, I wanted to create a game as Gaming has been my primary hobby since being a child.

For myself as the developer, the game build assisted in fulfilling these goals by:
* Enabling me to develop the logic and learn the structure of object-oriented programming.
* Allowing me to go outside of the current brief of the milestone to create an application from Vanilla Javascript.
* Assisting me in using additional resources such as Mozilla MDN docs and Udemy courses to learn the more about Vanilla Javascript.
* Preparing myself the world of Object-Orientated Languages.

#### Design:

In general the design of the game is pretty straight forward, a Single-Page application with elements that seamlessly interact via events. The project
utilises a single index.html file in conjunction with the Bootstrap Framework to ensure Mobile first fully responsive design. When considering design elements
for this project, a retro-ish vibe for the typography and color scheme came to mind. 

1. Font:

    The project has a main font of <a href="https://fonts.google.com/specimen/Bangers">'Bangers'</a> which was imported via the head element of the html file from Google Fonts, 
with the backup font being set to a default of 'Sans-serif'. The straight forward capitalised style of 'Bangers' made it easily recognisable for each character of the alphabet
to ensure a user could read each and every letter/number/special character shown.

2. Color Scheme:
    
    Two primary conflicting colors were conceived when creating this project:
    * ![#44ff78](https://placehold.it/15/44ff78/000000?text=+) `#44ff78` - Primary color
    * ![#00dde2](https://placehold.it/15/00dde2/000000?text=+) `#00dde2` - Secondary color
    * ![#000000](https://placehold.it/15/000000/000000?text+=) `#000000` - Tertiary color
    
    The primary color was used as the dominant color in the logo and to draw the attention to interactive elements in the Main menu and to the focus elements
    such as the "shown word" or the "remaining time" to the user on the gameboard. The secondary color was used as a continuous palette choice of the basic accompanying
    text to the Primary color justification. The Main menu modal, the Gameboard and the Game over modal all utilise the tertiary color as a solid contrast to the neon
    overarching illumination of the primary and secondary colors.
    
    The default background of the game in general is a two-tone gradient dark on top fading out to the secondary color. 
    
    `background: linear-gradient(to bottom, #000000 0%, #000000 21%, #00dde2 100%);` 3-stops were used in the two-tone gradient to allow the bleed-out of the darker of the two colors to happen at a
    predetermined point specified by myself @21% of the height of the total viewport height. 
    
3. Logo:

    The logo was custom created by myself as a play on the game name of "KeyWord!". The plain vector of the key image with the cut-out "word" offset with transparency made for a slightly mechanically
    whimsical and fun feature to distinguish the game from a host of similar games in the real world marketplace. The logo was made in Microsoft Excel by importing a basic key vector and then overlaying
    shapes onto the vector in the Primary color. From their I used a textbox from Microsoft Excel with some basic font to create the "Word" in the Tertiary color and overlay onto the traced vector
    image. Finally the shapes and text were grouped together to flatten into one layer and then exported as a .png file to use within the project.
    
    This .png file was passed through TinyPNG.com resulting in the smallest possible size whilst maintaining the current high-res image and the original aspect ratio. The newly compressed .png file of
    the logo was saved into an "img" folder within the "assets" folder of the Project Directory where it can be accessed and utilised as part of the project.
    <h1 align="center">
        <img src="https://github.com/auxfuse/Milestone2/blob/master/assets/img/keywordLogo.png" alt="KeyWord! Logo" width="96" height="96"/>
    </h1>
    
4. Geometry: 

    The prominent geometry of the game is square with rounded edges which are conceivable with the color scheme and the typography of the primary font. Each section of the game, whether that be
    Main Menu Modal, the Gameboard or the Game Over Modal are square with black backgrounds, and a primary color assigned to the borders to offset them against the gradient of the body.
    By using a common 2D shape for the main elements and components of the Game, it ensure a very easy solution and accompanying methodology approach to Mobile first design.
    
5. Wireframing:

    Wireframes for this project were created using Balsamiq, for Small and Large viewports to show the difference between them detailing how the elements would react to
    the size differences. Each element was structurally planned out at this stage and even during the physical build of the application there was not much deviation from the original
    planning.
    * Large device Wireframe for the Main menu Modal:
    
    <h1 align="center">
        <img src="assets/uxd/skeletonPlane/Welcome-screen.png" alt="wireframe1" title="Welcome screen Wireframe" width="500" height="250">
    </h1>
    
    * Large device Wireframe for the Gameboard:
    
    <h1 align="center">
        <img src="assets/uxd/skeletonPlane/Game-screen.png" alt="Wireframe1A" title="Gameboard Wireframe" width="500" height="250">
    </h1>
    
    * Mobile device Wireframe for the Main menu Modal:
    
    <h1 align="center">
        <img src="assets/uxd/skeletonPlane/Welcome-screen-mobile.png" alt="wireframe2" title="Welcome screen Mobile Wireframe" width="150" height="300">
    </h1>
    
    * Mobile device Wireframe for the Gameboard:
    
    <h1 align="center">
        <img src="assets/uxd/skeletonPlane/Game-screen-mobile.png" alt="wireframe2A" title="Gameboard screen Mobile Wireframe" width="150" height="300">
    </h1>

## Technology Used.

#### Languages, Frameworks, Editors & Version Control:
* HTML, CSS & Javascript ~ main languages used to create this single-page application game.
* <a href="https://getbootstrap.com/"> Bootstrap Framework</a> ~ Used as the core structuring layout building blocks of the website, ensuring mobile-frist design and responsive size display.
* Some additional <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/#js">Imported Javascript & JQuery</a> ~ For the Modal and Responsive Navbar expand & collapse functionality.
* <a href="https://www.jetbrains.com/pycharm/">PyCharm IDE</a> ~ PyCharm was used as the preferred IDE for this project.
* PyCharm built-in Terminal ~ Used to commit to local repository and further push to Github Repo ensuring adequate version
controlling throughout the life-cycle of the project build.
* <a href="https://git-scm.com/">Git</a> ~ Installed on local device and integrated to PyCharm as a Plugin to enable version controlling.
* <a href="https://github.com/auxfuse/Milestone1">Github</a> ~ Used to host the deployed website and repository of all previous versions of the build.

#### Tools Used:
* <a href="https://mycolor.space/">ColorSpace</a> ~ Used to find complimentary color schemes used throughout the game of my primary logo color.
* <a href="http://eye-dropper.kepi.cz/">Eye Dropper (Color Picker)</a> ~ Open Source Google Chrome Extension used to obtain hexadecimal/rgba/hsl values of colours. Built by Kepi (<a href="https://github.com/kepi">Kepi's Github</a>)
* <a href="https://tinypng.com/">Tinypng.com</a> ~ Used to compress the logo without affecting image quality/integrity.
* Google Chrome DevTools ~ Used to test the individual custom javascript functions, the responsiveness of the single-page
application, and the CSS visuals, as well as debugging for errors.
* <a href="https://balsamiq.com/">Balsamiq</a> ~ Used for the creation of my pre-build wireframes showing the main elements and differences in
size of same through small to large screen sizes.
* <a href="https://realfavicongenerator.net/">Favicon Generator</a> ~ Used to create favicon from custom Logo I created for the project.
* <a href="https://validator.w3.org/">W3C HTML Validator</a> & <a href="https://validator.w3.org/">W3C CSS Validator</a> & <a href="https://jshint.com/">JSHint</a> ~ Used to check the validity and efficiency of my code.
* <a href="https://autoprefixer.github.io/">Autoprefixer CSS Online</a> ~ Used to check for possible webkits required in the applications stylesheet ensuring Cross-browser support.
    
## Features.

This project incorporates the Bootstrap Framework and DoM manipulation to present and feature the main elements of the application being the "Main-Menu Modal", the "Gameboard" and the "Game-Over Modal". The project's logical flow of elements is as follows:

1. The applications header has two small functions that act rather similarly to each other. Although similar to each other, I decided to keep them both in at their current functionality as they both use different methods to apply the same effects on the application.
   * The logo is placed in the top-left position of the SPA as is customary with current branding conventions. The logo itself is wrapped in an anchor tag referenced to this page itself, thus acting as a <i>refresh</i>.
   * The <i>"Settings"</i> navigation link is to act as a computed refresh to call upon the main-menu to allow the user to change Theme or Difficulty mid-game resetting the timer and current score. This is achievable through a custom function which uses a built in method of the browser WebAPI to reload the current session from the browser rather than the cache:<br>
```javascript
// Replay game function to refresh browser window.
function replayGame() {

    // Use of "window.location" to get the current URL and reloading to same via "reload(true)" to reload from browser instead of the cache.
    window.location.reload(true);
}
```

2. On page load, a modal pops up acting as the "main-menu" for the user, asking them to pick a difficulty and a theme and explaining the rules surrounding the concept of their selection and the impact they have on the game. The user cannot start the game without selecting a Difficulty and a Theme, and if they try to do so a Browser Alert, which is a built in method of the browser WebAPI, 
will alert them of their intention to do so directing them back to the Main-Menu for selection.

2. On page load, a modal pops up acting as the "main-menu" for the user, asking them to pick a difficulty and a theme and explaining the rules surrounding the concept of their selection and the impact they have on the game. The user cannot start the game without selecting a Difficulty and a Theme, and if they try to do so a Browser Alert, which is a built in method of the browser WebAPI, will alert them of their intention to do so directing them back to the Main-Menu for selection.

3. The Gameboard features a host of dynamically updated fields and an input field that the User can type into in an attempt to match the shown word:
   * A "theme-span" Span element targeted via Javascript with the value of the Theme selection passed into to show the user there current Themed selection.
   * A "diff-span" Span element targeted via Javascript with the value of the Difficulty selection passed into to show the user there current Difficulty selection.
   * A "shown-word" Span element targeted via Javascript to show the user the currently generated Random word from the `setWord` method built in the "game" object, for them to attempt to match. Another Span element precedes the "shown-word" element to act as a Pseudo-label to detail some direction to the User that this is the <i>"Word to Match"</i>.
   * A "time-span" Span element detailing to the user the remaining time in seconds the user has to make a successful match the Game is over. As with the "shown-word" element, another Span element precede the "time-span" element to act as a Pseudo-label to direct the user attention to the decrementing Time, <i>"Time to beat"</i>.
   * The user input element is nested within a div and is part of the Bootstrap Frameworks "from-group" class of elements. It is a basic "input" form element set to accept "text" meaning alpha-numerical characters can be accepted along with special characters such as "/". "-" which may pop up in some of the Randomly generated words, as input elements have no 
   automatic validation associated with them.<br>The user may input their proposed match into the input field as either Uppercase or Lowercase without causing detrimental affects to the outcome via checking the input versus the shown random word and then passing both values through the `toLowerCase()` built in JS function ensuring a case match. Doing this we are keeping the core methodology of the game intact in that we are checking for spelling only! 
   * The user input element is nested within a div and is part of the Bootstrap Frameworks "from-group" class of elements. It is a basic "input" form element set to accept "text" meaning alpha-numerical characters can be accepted along with special characters such as "/". "-" which may pop up in some of the Randomly generated words, as input elements have no automatic validation associated with them.<br>The user may input their proposed match into the input field as either Uppercase 
   or Lowercase without causing detrimental affects to the outcome via checking the input versus the shown random word and then passing both values through the `toLowerCase()` built in JS function ensuring a case match. Doing this we are keeping the core methodology of the game intact in that we are checking for spelling only!
   * A small tooltip under the input field with a simple direction to <i>"Match the word shown in the given time....or GAME OVER!!"</i> for the user.
   * A "score-span" Span element targeted via Javascript detailing the total score of the current game session. Again as before a Pseudo-label precedes this dynamic element detailing, <i>"Total Score:"</i>
 
4. Once the timer reaches zero, the game is instantly ended, and the user is presented with the "Game-over" modal which details several components relating to the game and the game build:
   * The "Gameboard" display attribute is set to none to remove it from the DOM so the user is only displayed the Game over screen.
   * The current score at the time of losing is shown to the user via targeting a span element via `querySelector` and setting it equal to the `game.score` value. 
   * Some accompanying text thanking the user for playing and offering them the chance to provide feedback is supplied.
   * A Bootstrap Framework inline list class was used on an un-ordered list to set the social icons in a horizontally aligned format. The iconography used for these links were obtained via FontAwesome and then styled via custom CSS. On hover, each social icon will rotate 360deg clockwise to add an animated feel to a mainly static display for the user. They also convert 
   from the secondary color to the primary color to visualise the animation and draw the eye of the user. Each link will open in a new tab ensuring the user does not fully navigate away from the application and promoting user retention to return.
   * A Bootstrap Framework inline list class was used on an un-ordered list to set the social icons in a horizontally aligned format. The iconography used for these links were obtained via FontAwesome and then styled via custom CSS. On hover, each social icon will rotate 360deg clockwise to add an animated feel to a mainly static display for the user. They also convert from the secondary color to the primary color to visualise the animation and draw the eye of the user. Each link will open in a new 
   tab ensuring the user does not fully navigate away from the application and promoting user retention to return.
   * A single button <i>"Replay"</i> is present to allow the user to return to the main-menu and restart the game with new preferences in Theme and Difficulty if they so wish. This function is achieved via an event listener linked to the "onclick" property of the Replay button that invokes the `replayGame()` function. 

#### Future Features:
* Add additional Themes and Difficulty options for the User to choose from on Main-menu to expand the games replayability.
* Add 'High Score' Feature to store the best scores to local storage for the User to try and beat.
* To create some sort of backend feature that would store all high scores across all users and display the best score on the game much like an Arcade game would have.
* Create an <i>"Infinite"</i> & <i>"Un-Timed"</i> Mode for the User to just Learn to type at their own pace.
* Create Theme-mode colors, typography and design elements to coincide with the Theme selection, e.g. if Pokemon, primary color = "red", secondary color = "white" with pokemon appearing alongside their respective name.
* Higher degree of Defensive Design for the modals, to restrict the user to only have clickable areas on the Main-menu and Game-over modal when they are visible.
* Function to add bugs/errors direct from the Application to send direct to the Developer without the need of opening the User's email client.

#### Removed Features:
* One feature that was originally in the application was to change the background image to the theme selected by the User. For example, if the User selected Pokemon the default-bg class on the body element would be replaced by a pre-existing CSS class of "pokemon-bg" which would be appended too the element via these code steps in the `setTheme` method in the `game` object:
```javascript
// Loop through each item in the originalData and remove class name from the body to ensure background and wordLists selection update accordingly.
// Without this step, the user could not reselect a previous theme to change the background as the class would not be removed from the body.
   game.originalData.forEach(item => document.body.classList.remove(`${item[0]}-bg`));
// Change background by using template literal to insert theme value name as string & concat "-bg" to construct class name.
   bodyBg.classList.add(`${value}-bg`);
``` 
The above code has since been removed, but to see the affect it had on the project view this commit:<br><a href="https://github.com/auxfuse/Milestone2/tree/46a05bf07d6353d0d3c399f40f482220effc2366" target="_blank"><i>Commit ending in "fc2366"</i></a>

## Testing.

The project's testing was completely void of any automatic testing such as Jasmine/Enzyme or Jest, due to the sheer knowledge gap in this area of testing I have. Manual testing for the majority of the application
was fulfilled by myself by creating multiple scenarios for a particular session and to try and document any errors/random side-effects captured in the DevTools.

<i>A typical testing session would entail:</i>
* Loading the game and forcing browser refresh multiple times to try and capture any Fetch hangups.
* Multi-click instance on several of the interactable elements.
* Opening the application, and using the DevTools and setting breakpoints on the "if/else" functions to test for redundant instances of the logical conditions, an example would be adding a breakpoint and stepping
 through the code until the breakpoint was hit to ensure each step of the code functioned as expected.
 
    Such as the setting the breakpoint on the "else" block of code in the gameClock method to step through and watch the parameter update when the game.time property reached "0". Once "0" was hit would the Game-over modal display, if No then debug and rectify code when solved, if Yes, move on to next check (See image):
<h1 align="center">
        <img src="assets/img/manualTestTimer.png" alt="Manual Testing Image" title="Manual Testing Image" width="600" height="300">
</h1>

Continuous testing for this application was carried throughout the entire lifetime of the build. This was achieved through the Google Chrome devtools and a host of devices, from mobile to laptop and incorporating as many of the current mainstream browsers that are popular today, (Google Chrome, Firefox, Edge, Opera & Internet Explorer).

The application failed to load the javascript file at all on Internet Explorer due to the use of Arrow functions used through the code. I decided that the effort needed to fix this far outweighed the need for the application to work on Internet Explorer
as the browser itself is a legacy browser and not in as much circulation as the other browsers anymore. I did not have access to desktop/laptop version of Safari, so the project was not tested on that browser.

Using JSHint to validate the Project's Javascript file configured to accept jQuery & ES6 New JS features, returned with two direct warnings of which I could fix. This automatic test of the file allowed me to see where I had missing semi-colons from block of code. It also returned with warnings surrounding the use of `async functions` 
being only natively available to ES8, however they still work as expected during my testing so I chose to not source alternative code to produce the same output to keep the JS file clean and structured efficiently.

The project utilises as much vanilla Javascript as possibly to allow the developer to understand the language appropriately. jQuery was used in total of three times to target the modal elements to show/hide on event of window load, when Game-over was achieved or when the "Settings" Header nav-link was clicked. To convert these small 
instances of jQuery to Vanilla Javascript would of incorporated more lines of code than deemed necessary or efficient use of time. With this in mind I chose to leave these as they are!

Passing the html file contents through the W3C Validator for HTML resulted in no errors. However, the Bootstrap componentry of the application was tested extensively to ensure that the Mobile first Responsive Approach was achieved with this Project. The Application was tested extensively between my Home Desktop and Large Monitor 
screen, my Apple iPhone6s Personal Mobile as well as a Samsung Galaxy S9 Mobile phone. The application worked well on mobile devices although when a user needed to type into the userInput field the touchscreen keyboard displayed by phone caused in some cases 50% of the mobile screen to be obscured which ultimately was not great User experience.
Aside from that, if something did not look right during testing changes were made to the localhost preview DevTools and then copy and pasted from this test environment into my IDE before committing and pushing the update to my Repository to take permanent effect.

The associated CSS file contents were regularly checked against the W3C Validator for CSS to ensure any errors were spotted throughout the development of the style sheet. As with the HTML validation if any errors were present they were rectified via the localhost preview DevTools and then copy and pasted over to the IDE 
environment before committing and pushing the updated code to my Github Repository. In tandem with using the W3C Validator for CSS, the CSS Autoprefixer was used to ensure the most up to date vendor prefixes were captured and detailed in the stylesheet enabling the cross-browser support some of the styles needed in order to work.

The project itself was posted to the Peer-Code-Review channel of the Code Institute Slack Forum in a bid for others to help spot errors, potential bugs and problems, to try and break the application and for general feedback on the performance and functionality of the project. The results for some of the bigger flaws are as follows:
   * The project lacked clear defensive design in that during a peer-review, one of my peer-review colleagues was able to click outside of the Main-menu and Game-over modal thus creating an un-started session of the game allowing an infinite score hack by pressing enter.
   
        To overcome this obvious flaw, for both modals I added `data-backdrop="static"` to not allow a user to click outside of the modal and close same, and `data-keyboard="false"` to remove pressing ESC to close the modals too. This closed a big flaw in my design and instantly acted against the bug that was found during the peer-review.
   * The social icons linked to external websites such as Github, LinkedIn and Instagram were all missing `rel="noopener"`. This has now been fixed and amended to include same.
   * The time scales set at 8 for easy, 6 for medium and 4 for hard were deemed to extreme for the inexperienced typist. To combat this and to incorporate for a multitude of experience
   groups, I added a fun "99-second Mode", which gave the user 99 seconds to complete the word and still gain a point for their efforts. After testing this with my own children it was
   deemed a much greater success for them than the other timed modes, and overall experience amongst my peers was greatly improved too.
   * The main gameboard would flicker on page load causing some "bad UX", to rectify this a custom class was added to the element in html and targeted via css to set the display to "none" by default.
   When the user clicked on "start" in the Main-menu modal to start a game, the observer would detect the change in the modal DOM state and remove that class from the element thus making it visible again.
   * Another bug, more so considered a "Cheat" or "Hack" was the ability to quickly copy and paste the shown word into the user input to automatically pass the matchWord function validation. To compensate for this flaw,
   the html element for the shownWord was targeted via css and "user-select" property was set to "none". Code below:
   ```css
   .shown-word {
    font-size: 2.2rem;
    text-decoration: underline;
    color: #44ff78;
    /* Use of user-select: none to prevent users from copy & pasting the shown word */
    user-select: none;
    }
   ```
   
The project has a couple of remaining bugs found during extensive testing amongst the multiple browsers to hand:
* Internet Explorer will not recognise Arrow functions thus the game fails to properly load on that browser entirely.
* Autofocus works well on the userInput in Google Chrome and the Opera browsers, however it does not work as expected on Microsoft Edge or Firefox.

## Deployment.
This single-page application Game was developed in PyCharm IDE and version controlling was utilised via local (git) and online (github) repository
technologies. 
 
Deploying this single-page application Game was achieved through Github pages by:
* Selecting the Repository from my list in the Github Dashboard.
* Navigating to <i>"Settings"</i> and to the <i>"Github Pages"</i> section.
* From the <i>"Source"</i> section, click on the dropdown and select the the "Master Branch" from the associated list.
* Once <i>"Master Branch"</i> is selected, the page will auto-refresh and navigate the user to the top of the page with a
visual ribbon display detailing <i>"Github pages source saved</i>, indicating the success of the deployment.
* The link to the website can then be found under the <i>"Github Pages"</i> section, with a ribbon notification stating:<br> __"Your site is published at "https://auxfuse.github.io/Milestone2/index.html".__

To clone the website:
* Select the Repository from the Github Dashboard.
* Click on the <i>"Clone or download"</i> green button located above and to the right of the File Structure table.
* Click on the <i>"clipboard icon"</i> to the right of the Git URL to copy the web URL of the Clone. 
* Open your preferred Integrated Development Environment (IDE) and navigate to the terminal window.
* Change the directory to where you want to clone the repository too. (In the case of PyCharm the directory path can be found through the <i>"Navigate"</i> tab).
* Paste the Git URL copied from above and click <i>"Ok"</i>. (Again in the case of PyCharm once you click <i>"clone"</i>, Git Root mapping will be automatically set to the project Root directory).

## Credits.

Three of the data sources are sourced via a Github Profile by <a href="https://github.com/sindresorhus">Sindre Sorhus</a>, Pokemon, Superheroes and Supervillains. 

All webkits detailed in the CSS were obtained via <a href="https://autoprefixer.github.io/">Autoprefixer CSS Online</a>.

<a href="https://realfavicongenerator.net/">Real Favicon Generator</a> was used to compress and produce the favicon.ico file, and the code to implement
the favicon was researched and found through <a href="https://stackoverflow.com/questions/11893478/add-favicon-to-website">Stack Overflow</a>.

#### Special Thanks & Acknowledgements:

1. To my mentor, <a href="https://github.com/5pence">**Spencer Barriball**</a>, for incredible mentoring from supporting my idea of creating a game with Vanilla Javascript, to the strategy to use for the project, and for assisting during my project reviews with
great critique and potential solutions.

2. To a fellow student turned Alumni, <a href="https://github.com/nazarja">**Sean Murphy**</a> for incredible assistance in many back and forth conversation on logic, structure and syntax in Vanilla JS programming,
who was always available and very generous with his time whenever I had a question or stuck on a problem and for providing multiple live code example to assist in my learning and understanding!

3. To all in the #peer-code-review channel of Slack without whom, I would not have known of or been able to fix the abundant bugs and potential flaws, and for providing potential
solutions to same:

    <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="16" height="16"><a href="https://github.com/coderbeez"> **Edel O' Sullivan**</a> & her son, Jack, for trialing the games effectiveness with kids!
    
    <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="16" height="16"><a href="https://github.com/Eventyret"> **Simen Daehlin**</a> for taking a lot of time to critique my project and provide solutions to same.
    
    <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="16" height="16"><a href="https://github.com/JohnL3"> **John Long**</a> for breaking my game and allowing me to learn about physical defensive design.
    
    <img src="assets/img/keywordLogo.png" alt="logo" title="KeyWord! Logo" width="16" height="16"><a href="https://github.com/AJGreaves"> **Anna Greaves**</a> for always providing great feedback and friendship through Slack.
    
4. To my fellow students in Code Institute and to the staff and mentors who converse & frequent Slack regularly with their own queries/ideas & opinions, and assisting with mine, to help me better understand all facets of this course!

###### <i>Disclaimer: This project was created for educational use only as part of the Code Institute Full Stack Software Development Course for Milestone 2 Grading!</i>