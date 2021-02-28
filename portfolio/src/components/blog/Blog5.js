import React from 'react';
import PicardMeme from '../../images/picardMeme.jpeg';
import YoDawg from '../../images/yoDawg.jpg';
import Spongebob from '../../images/spongebob.png';
import CoffeeOffice from '../../images/coffeeOffice.gif';
import CoffeeGif from '../../images/coffeemachine.gif';
import CoffeeGifBonus from '../../images/coffeemachine_bonus.gif';
import YourStory from '../../images/Your_Story.png';
import Inheritance from '../../images/inheritance.jpg';
import FredAndFred from '../../images/fredAndFred.jpg';
import YesActually from '../../images/yesActuallyNo.jpg';

function Blog5() {
     return (
          <article className="blog">
               <h1>Object Oriented Programming in Memes</h1>
               <h2 className="blog_published-heading">Originally posted on Medium on January 18, 2021</h2>
               <p>Object Oriented Programming (OOP) languages, like JavaScript and Python, organize software design around data, formatted in objects, rather than function or logic.</p>
               <hr></hr>
               <p>First, I’ll cover the basics: objects, classes, instance, and methods. Then, I’ll briefly explain the four main pillars of OOP design: Encapsulation, Abstraction, Inheritance,
                    and Polymorphism.</p>
               <h3>Objects</h3>
               <p>An object is data formatted to represent a real world object that has a state and behavior.</p>
               <img src={PicardMeme} alt="`Here is my desired state. Make it so!` - Captain Picard" className="blog_image"></img>
               <p>Picard’s state would be “wants to set a course” and his behaviors would be telling an ensign the desired course and to “Make it so.”</p>
               <h3>Classes</h3>
               <p>Different programming languages go about this different ways, but essentially a class is a blueprint for creating an object.</p>
               <img src={YoDawg} className="blog_image" alt="Yo Dawg, I hear you like object oriented programming, so I nested a class inside your class so you can create objects while you create objects"></img>
               <h3>Instance</h3>
               <p>Any time an object is created it is <a href="https://www.crondose.com/2016/07/what-does-instantiation-mean/">instantiated</a>.</p>
               <img src={Spongebob} className="blog_image" alt="Many Spongebobs sitting at office desks as a metaphor for the mind"></img>
               <p>Each deskSponge shown here would be an instance of an object and because they’re made with the <code>Spongebob</code> class, an instance of <code>Spongebob</code>.</p>
               <h3>Methods</h3>
               <p>Functions within an object.</p>
               <img src={CoffeeOffice} className="blog_image" alt="An office worker hits a button and a large coffee machine squirts coffee directly in her mouth. She then types frantically."></img>
               <h4 className="caption">Source: https://www.behance.net/qaisicle</h4>
               <p>In other words, our object’s behaviors. The coffee machine above would have a method for making coffee and the button would call it. The office worker would have a method for pushing
                    the button, drinking the coffee, and caffeinated typing.</p>
               <hr></hr>
               <h3>Encapsulation</h3>
               <p>You don’t need to know how the coffee machine works to press the button and get coffee.</p>
               <img src={CoffeeGif} className="blog_image" alt="A French Press says to a coffee machine 'You automatic coffee machines think you're so great, huh? But can you do this?' The coffee machine watches in confusion as the french press rapidly moves its plunger."></img>
               <img src={CoffeeGifBonus} className="blog_image" alt="Now two french presses are rapidly moving their plungers, and the automatic coffee machine looks horrified."></img>
               <h4 className="caption">Source: https://lolnein.com/2019/10/29/coffeemachinevsfrenchpress/</h4>
               <p>In other words, the behavior and state of the object in question should be private and only affected by private methods within the object. (The person who pressed the button doesn’t
                    see the water being heated and pushed through the coffee grounds.) The object should have public methods that other objects can use to interact with it (like the button).</p>
               <h3>Abstraction</h3>
               <p>The only information about an object that is available outside the object is information absolutely necessary for other objects to use it.</p>
               <img className="blog_image" src={YourStory} alt="A seagull and crab discuss the crab's mysterious journey in a small row boat, ending with 'any details will remain a mystery.'"></img>
               <h4 className="caption">Source: http://www.poorlydrawnlines.com/comic/your-story/</h4>
               <p>This is also referred to as <a href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)#An_information-hiding_mechanism">information hiding</a>, and the public methods
                    made available for other objects are “getters” and “setters.”</p>
               <h3>Inheritance</h3>
               <p>Just like genetics — if a class was a dog and each object inheriting from the dog class was a puppy.</p>
               <img src={Inheritance} className="blog_image" alt="A dog mom stands in front of her puppies. The caption reads 'I made dis. And dis. And dis. And dis. And dis. And dis.'"></img>
               <p>Objects made with a class (JavaScript uses the keyword <code>extends</code>) inherit the information and methods of the super (or parent) class (calling <code>super()</code> in the
                    <code>constructor</code> in a JavaScript object).</p>
               <h3>Polymorphism</h3>
               <p><code>Fred</code> and <code>ghostFred</code> both have a method called <code>getDressed()</code>. When <code>getDressed()</code> is called, <code>Fred</code> will put on his ascot, and
                    <code>ghostFred</code> will put on his ghost costume.</p>
               <img src={FredAndFred} className="blog_image" alt="Fred from Scooby Doo unmasks a ghost villain to reveal... also Fred"></img>
               <p>In this case, <code>Fred</code> is the class, and <code>ghostFred</code> is an object that extends <code>Fred</code>. <code>ghostFred</code> inherits the method
                    <code>getDressed()</code> from <code>Fred</code>, but when <code>ghostFred</code> is instantiated, the programmer passes different arguments to <code>getDressed()</code> and/or
                    changes the method’s code (like passing the ghost costume instead of the ascot). The OOP language evaluates which <code>getDressed()</code> to use based on which object is being
                    referenced when it is called (the object the <a href="https://www.w3schools.com/js/js_this.asp"><code>this</code> keyword</a> would refer to). Used correctly, this can significantly
                    cut down on repeated code.</p>
               <img src={YesActually} className="blog_image" alt='Me: *explains polymorphism* Friend: So the subclass the same as the superclass? Me:"a claymation pirate saying "Well yes, but actually no"'></img>
               <h3>Conclusion</h3>
               <p>If you’re an experienced developer, hopefully you got a chuckle out of this. If you’re a beginner, I hope it helps you use an OOP language more confidently!</p>
               <p>If you enjoyed this high level overview of OOP in memes or it left you with more questions, leave a comment below!</p>
          </article>
     )
}

export default Blog5;