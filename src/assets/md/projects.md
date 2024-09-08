## Board Game Master ![github](Board-Game-Master)
* A prototype for a board game creator.
* Made for the AP Programming course's pair programming project at Point Grey Secondary School.
* This was made in Unity.

![boardgame]()
## "Happy Birthday" Gifts
  * Sometimes, I code small gifts for my friends and family.
  * I made a little cake animation for my mom, and a small starry sky animation for my dad.
  * The black rectangle hides some private information. The Thai text says 'happy birthday.'

![bdays]()

## Wordpress Form Response Tool
* I made a simple tool for checking if our (WIP) wordpress site received similar form responses.
* It reads exported form responses from the Wordpress site as CSV files, then lists pairs of form 
  responses that differ from each other by up to only three fields.

![formscan]()

## Game-24 Solutions ![github](Game24-Solutions)
* I generated all possible quads where [Game-24](https://en.wikipedia.org/wiki/24_(puzzle)) 
  is solvable.
* In the version of the game I worked with, the players are given four digits (0-9), and must find an
  expression involving the digits and only operations of +, -, *, / which evaluates to 24.
* I wrote a [Haskell](https://www.haskell.org/) program that enumerates all the
  quads of digits with which winning is possible.
* It found some surprising winnable quads.
  You can try your luck at cracking them if you want a challenge :).
  ![QuadsSols]()

## Sierpinski
* I submitted an animation of a 
  [Sierpinski triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)
  for the university of Edinburgh's 2019 
  [functional programming competition](https://homepages.inf.ed.ac.uk/wadler/fp-competition-2019/).
* The code I submitted was customizable enough to make the edges concaved or convexed.

  ![sierpinski]()

  ![sierpinski-vids]()

## TPatterns-lua ![github](TPatterns-lua)
* A small [Lua](https://www.lua.org/) library for pattern matching on Lua tables
* This Lua module is on [LuaRocks](https://luarocks.org/modules/Thanakrit-Anutrakulchai/tpatterns)!
```lua
    -- Here is a short example from the Github page:

    -- The matchers can be used as switch statements e.g.
    match (value) {
        case(5) - ... ,
        case('hello') - ...
    }

    -- But their strength is in using the binded variables. e.g.
    local append;
    append = match_all_nomt { 
        case( empty_list, var'ys' ) - 'ys',
        case({head = var'x', tail = var'xs'}, var'ys') - 
            function(t) return cons(t.x, append(t.xs, t.ys)) end 
    }

    --  defines a function `append` that takes two lists of the form 
    --    { head = value, tail = restOfList },
    --    or {} (for the empty list), 
    --  and concatenates them together.

```

## Scaly Sewer Adventures
* A short game made in GameMaker Lite v8 for Mount Boucherie Secondary's 
  infotech (programming) course
* It is about a lizard escaping a shed filled with flies and angry rats.
* The music playing in the game is:
  "March of the Spoons" Kevin MacLeod (incompetech.com)
  Licensed under Creative Commons: By Attribution 4.0 License
  http://creativecommons.org/licenses/by/4.0/.

![sewers]()

## This Website ![github](Thanakrit-Anutrakulchai.github.io)
* You're looking at it.
* Currently, it is hosted on Github Pages and built using Vite and React.
* Some pages are written using markdown with the 
  [react-markdown](https://github.com/remarkjs/react-markdown) plugin.
